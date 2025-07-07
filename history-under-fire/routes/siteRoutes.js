const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

router.post('/sites', async (req, res) => {
  const {
    name,
    description,
    location,
    latitude,
    longitude,
    status,
    type,
    bibliography,
  } = req.body;

  try {
    const site = await prisma.culturalSite.create({
      data: {
        name,
        description,
        location,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        status,
        type,
        bibliography,
      },
    });

    res.status(201).json(site);
  } catch (err) {
    console.error('Failed to create cultural site:', err);
    res.status(500).json({ error: 'Failed to create cultural site' });
  }
});

router.get('/sites', async (req, res) => {
  try {
    const sites = await prisma.culturalSite.findMany();
    res.json(sites);
  } catch (err) {
    console.error('Failed to fetch cultural sites:', err);
    res.status(500).json({ error: 'Failed to fetch cultural sites' });
  }
});

module.exports = router;
