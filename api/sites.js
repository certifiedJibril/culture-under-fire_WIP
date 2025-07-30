const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Abilita CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const sites = await prisma.culturalSite.findMany();
      res.status(200).json(sites);
    } catch (err) {
      console.error('Failed to fetch cultural sites:', err);
      res.status(500).json({ error: 'Failed to fetch cultural sites' });
    }
  } else if (req.method === 'POST') {
    try {
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
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 