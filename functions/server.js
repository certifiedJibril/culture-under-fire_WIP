console.log("👀 starting server.js");

const express = require('express');
const cors = require('cors');
require('dotenv').config();

console.log("📦 loading siteRoutes...");
const siteRoutes = require('./routes/siteRoutes');
console.log("✅ siteRoutes imported");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api', siteRoutes); // Enables /api/sites and /api/test

app.get('/', (req, res) => {
  res.send('History Under Fire API is running.');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
