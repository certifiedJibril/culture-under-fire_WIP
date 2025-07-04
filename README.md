# History Under Fire — Technical Overview & Deployment Guide

## Project Summary

**History Under Fire** is a full-stack web application to document and visualize Ukraine’s endangered cultural heritage using an interactive map. It consists of:

* **Backend API**: Node.js + Express.js server with PostgreSQL database (hosted on Neon), using Prisma ORM for data access.
* **Frontend SPA**: React app bootstrapped with Vite, rendering a Mapbox GL JS interactive map with markers representing cultural sites.

---

## Code Structure & Components

### Backend — `history-under-fire` folder

* **`server.js`**

  * Entry point for the Node.js API server.
  * Sets up Express server with CORS and JSON body parsing.
  * Loads routes from `routes/siteRoutes.js` under `/api` prefix.
  * Runs on port **4000** (default, configurable via `.env`).

* **`routes/siteRoutes.js`**

  * Defines REST API routes to:

    * `GET /api/sites` — return all cultural sites.
    * `POST /api/sites` — create a new cultural site entry.
  * Uses Prisma Client to query PostgreSQL database.

* **Prisma**

  * `prisma/schema.prisma` defines the database schema (`CulturalSite` model).
  * Database hosted on Neon, connected via `DATABASE_URL` in `.env`.

* **Environment Variables (`.env`)**

  * `PORT=4000` — backend server port.
  * `DATABASE_URL=postgresql://<user>:<password>@<host>/<db>?sslmode=require` — PostgreSQL connection string.

---

### Frontend — `history-map` folder

* **React + Vite setup**

  * Lightweight React SPA with fast dev server and optimized builds.

* **`src/MapView.jsx`**

  * Core React component rendering Mapbox interactive map.
  * Fetches cultural sites from backend API (`http://localhost:4000/api/sites`).
  * Displays colored markers (green, orange, red) based on site status.
  * Shows popups on marker click with site details.

* **`src/Navbar.jsx`** (optional)

  * A basic navigation bar component for project title and future options.

* **Mapbox GL JS**

  * Map rendered with Mapbox style and controls.
  * Requires a Mapbox access token set in `MapView.jsx`.

* **Environment**

  * Frontend runs on port **5173** (default Vite dev server port).
  * Calls backend API at `http://localhost:4000`.

---

## How to Run Locally (Development)

1. **Backend**

```bash
cd history-under-fire
npm install
node server.js
```

* Backend server will run at `http://localhost:4000`.

2. **Frontend**

```bash
cd ../history-map
npm install
npm run dev
```

* Frontend dev server will run at `http://localhost:5173`.

3. **Open browser** at `http://localhost:5173`.

* You should see the interactive map with markers fetched from backend.

---

## Important Notes for Deployment

* Both backend and frontend are **separate servers** that must run concurrently or be deployed separately.
* **Backend port** (default 4000) must be accessible to frontend.
* The frontend’s API calls target the backend URL (update if deployed elsewhere).
* **Environment variables** (API keys, database URLs) must be securely configured.
* The Mapbox access token is hardcoded in frontend `MapView.jsx`; consider moving to safer env config for production.
* Database is PostgreSQL hosted on Neon; ensure credentials are valid and accessible from deployed backend.
* File uploads (future feature) will require integration with Cloudinary or similar.

---

## Summary of Keys & Config

| Key/Config            | Location                   | Purpose                            |
| --------------------- | -------------------------- | ---------------------------------- |
| `DATABASE_URL`        | Backend `.env`             | PostgreSQL connection string       |
| `PORT`                | Backend `.env`             | Backend server port (default 4000) |
| `Mapbox Access Token` | Frontend `src/MapView.jsx` | Mapbox GL JS access token for map  |

---



## Firebase Deployment Notes

If you plan to deploy using **Firebase**, here’s some guidance:

* **Frontend**
  Deploy your React app to **Firebase Hosting**:

  * Build your frontend for production:

    ```bash
    npm run build
    ```
  * Deploy the contents of the `dist` (or `build`) folder using the Firebase CLI:

    ```bash
    firebase deploy --only hosting
    ```
  * Configure `firebase.json` to set correct public directory and rewrite rules if needed.

* **Backend**
  Firebase Hosting only serves static files, so your **Node.js backend cannot run directly on Firebase Hosting**.
  To host your backend API with Firebase:

  * Use **Firebase Cloud Functions** to rewrite or port your Express API (requires some refactoring).
  * Or deploy your backend separately on a Node.js platform (Heroku, Railway, DigitalOcean, etc.) and connect your Firebase-hosted frontend to it.

* **Environment Variables & API Keys**

  * Store secrets securely using Firebase environment config or other secret management solutions.
  * Avoid exposing sensitive keys in the frontend bundle.

* **CORS & Networking**

  * Ensure your backend allows CORS requests from your Firebase Hosting domain.

