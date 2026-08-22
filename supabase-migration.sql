-- Run this in the Supabase SQL editor before deploying the updated backend.
--
-- CAUTION: if your "leaderboard" table already has live data in it under
-- the old columns (name, first_score, best_score, last_score, best_vaults,
-- best_time, ranked_score, runs), this migration does NOT try to convert
-- that data into the new "vaults" jsonb shape — it can't, the old rows
-- don't carry enough detail. If you need to preserve existing scores,
-- export the table first and let me know before running this.

-- If the table doesn't exist yet:
create table if not exists leaderboard (
  name text primary key,
  vaults jsonb not null default '{}'::jsonb,
  best_time integer,
  runs integer not null default 0,
  updated_at timestamptz not null default now()
);

-- If the table already exists with the old columns, bring it up to date:
alter table leaderboard
  add column if not exists vaults jsonb not null default '{}'::jsonb;

alter table leaderboard
  drop column if exists first_score,
  drop column if exists best_score,
  drop column if exists last_score,
  drop column if exists best_vaults,
  drop column if exists ranked_score;

-- best_time, runs, updated_at, name should already exist with compatible types.
