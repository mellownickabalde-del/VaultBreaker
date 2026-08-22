const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// GET /api/leaderboard — every player's raw progress.
// Ranking itself is computed client-side (it depends on which vaults
// are "in scope" for the current build of the game), so this just
// returns everything needed to compute it: per-vault first/best points,
// best completion time, and run count.
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('name, vaults, best_time, runs');
  if (error) return res.status(500).json({ error: error.message });

  const out = (data || []).map(row => ({
    name: row.name,
    vaults: row.vaults || {},
    bestTime: row.best_time,
    runs: row.runs
  }));
  res.json(out);
});

// POST /api/leaderboard — record a completed run.
// Body: { name, vaultPts: { [vaultId]: pointsThisRun }, timeSecs }
// Merges into the player's existing record: per vault, "first" is set
// once and never overwritten; "best" is the max across all runs.
router.post('/', async (req, res) => {
  const { name, vaultPts, timeSecs } = req.body;
  if (!name || !vaultPts || typeof vaultPts !== 'object' || typeof timeSecs !== 'number') {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const key = name.trim().toUpperCase();
  if (!key) return res.status(400).json({ error: 'Invalid name' });

  const { data: existing, error: fetchError } = await supabase
    .from('leaderboard')
    .select('*')
    .eq('name', key)
    .maybeSingle();
  if (fetchError) return res.status(500).json({ error: fetchError.message });

  const vaults = { ...(existing?.vaults || {}) };
  for (const [vaultId, pts] of Object.entries(vaultPts)) {
    const points = Number(pts);
    if (Number.isNaN(points)) continue;
    if (!vaults[vaultId]) {
      vaults[vaultId] = { first: points, best: points };
    } else {
      vaults[vaultId].best = Math.max(vaults[vaultId].best, points);
    }
  }

  const bestTime = existing && existing.best_time != null
    ? Math.min(existing.best_time, timeSecs)
    : timeSecs;
  const runs = (existing?.runs || 0) + 1;

  const { error: upsertError } = await supabase
    .from('leaderboard')
    .upsert({
      name: key,
      vaults,
      best_time: bestTime,
      runs,
      updated_at: new Date().toISOString()
    }, { onConflict: 'name' });
  if (upsertError) return res.status(500).json({ error: upsertError.message });

  res.json({ ok: true });
});

// DELETE /api/leaderboard — wipes the board. Gated by a shared secret
// header instead of a login system, since there's nothing to log into.
router.delete('/', async (req, res) => {
  const key = req.headers['x-admin-key'];
  if (!key || key !== process.env.ADMIN_RESET_KEY) {
    return res.status(403).json({ error: 'Not authorized' });
  }
  const { error } = await supabase.from('leaderboard').delete().neq('name', '');
  if (error) return res.status(500).json({ error: error.message });
  res.json({ ok: true });
});

module.exports = router;
