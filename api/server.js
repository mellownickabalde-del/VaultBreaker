require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API
app.use('/api/leaderboard', leaderboardRoutes);

// Static frontend (one-service deploy: same origin, no CORS headaches)
const FRONTEND_DIR = path.join(__dirname, '..', 'frontend');
app.use(express.static(FRONTEND_DIR));

// SPA-style fallback: any non-API GET serves the game
app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Vault Breaker server running on port ${PORT}`);
});
