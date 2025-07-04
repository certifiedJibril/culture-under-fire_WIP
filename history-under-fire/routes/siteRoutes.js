console.log("✅ siteRoutes.js loaded");

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

// Test route
router.get('/test', (req, res) => {
  res.send('Test route is working ✅');
});

// Create new cultural site
router.post('/sites', async (req, res) => {
  const { name, description, location, latitude, longitude, status } = req.body;

  try {
    const site = await prisma.culturalSite.create({
      data: {
        name,
        description,
        location,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        status,
      },
    });

    res.status(201).json(site);
  } catch (err) {
    console.error("❌ Error creating site:", err);
    res.status(500).json({ error: 'Failed to create cultural site' });
  }
});

// Get all cultural sites
router.get('/sites', async (req, res) => {
  try {
    const sites = await prisma.culturalSite.findMany();
    res.json(sites);
  } catch (err) {
    console.error("❌ Error fetching sites:", err);
    res.status(500).json({ error: 'Failed to fetch cultural sites' });
  }
});

module.exports = router;
