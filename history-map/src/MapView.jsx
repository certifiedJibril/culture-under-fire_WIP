import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoib2ZmaWNpYWxqaWJyaWwiLCJhIjoiY21jcDI3am5qMDF3cjJpczRrOWR5bmY3bSJ9.ur_FGCaTKtXKCnDNbgD8oA';

const statusColors = {
  INTACT: '#2ecc71',   // green
  DAMAGED: '#f39c12',  // orange
  DESTROYED: '#e74c3c' // red
};

export default function MapView() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [sites, setSites] = useState([]);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [30.5234, 50.4501], // Kyiv coords
      zoom: 6,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    fetch('http://localhost:4000/api/sites')
      .then(res => res.json())
      .then(data => setSites(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!map.current || !sites.length) return;

    map.current.markers?.forEach(marker => marker.remove());
    map.current.markers = [];

    sites.forEach(site => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = statusColors[site.status] || '#3498db';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <h3>${site.name}</h3>
        <p><strong>Status:</strong> ${site.status}</p>
        <p>${site.description}</p>
      `);

      new mapboxgl.Marker(el)
        .setLngLat([site.longitude, site.latitude])
        .setPopup(popup)  // attaches popup automatically on click
        .addTo(map.current);
    });
  }, [sites]);

  return (
    <>
      <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />
      <style>{`
        .marker {
          box-shadow: 0 0 5px rgba(0,0,0,0.3);
          pointer-events: auto;
        }
        body, html, #root {
          margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; font-family: Arial, sans-serif;
        }
      `}</style>
    </>
  );
}
