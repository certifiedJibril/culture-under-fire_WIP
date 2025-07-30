import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Navbar from './Navbar';
import Legend from './Legend';
import { staticSites } from './data';

mapboxgl.accessToken = 'pk.eyJ1Ijoib2ZmaWNpYWxqaWJyaWwiLCJhIjoiY21jcDI3am5qMDF3cjJpczRrOWR5bmY3bSJ9.ur_FGCaTKtXKCnDNbgD8oA';

const typeIcons = {
  MONUMENT: '🗿',
  MUSEUM: '🏛️',
  CHURCH: '⛪',
  LIBRARY: '📚',
  STATUE: '🗽',
  THEATER: '🎭',
  OTHER: '📍',
  HISTORIC_BUILDING: '🏰',
  CULTURAL_CENTER: '🎪',
  EDUCATIONAL_INSTITUTION: '🎓'
};

const statusColors = {
  INTACT: '#2ecc71',
  DAMAGED: '#f39c12',
  DESTROYED: '#e74c3c',
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
      center: [30.5234, 50.4501],
      zoom: 6,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    // Usa i dati statici (8 siti reali)
    setSites(staticSites);
  }, []);

  useEffect(() => {
    if (!map.current || !sites.length) return;

    map.current.markers?.forEach(marker => marker.remove());
    map.current.markers = [];

    sites.forEach(site => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = statusColors[site.status] || '#3498db';
      el.style.color = '#fff';
      el.style.fontSize = '18px';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.style.width = '28px';
      el.style.height = '28px';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';
      el.textContent = typeIcons[site.type] || '📍';

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <h3>${site.name}</h3>
        <p><strong>Status:</strong> ${site.status}</p>
        <p><strong>Type:</strong> ${site.type}</p>
        <p><strong>Coordinates:</strong> ${site.latitude.toFixed(4)}, ${site.longitude.toFixed(4)}</p>
        <p><strong>Bibliography:</strong> ${site.bibliography ? site.bibliography : 'N/A'}</p>
      `);

      new mapboxgl.Marker(el)
        .setLngLat([site.longitude, site.latitude])
        .setPopup(popup)
        .addTo(map.current);
    });
  }, [sites]);

  return (
    <>
      <Navbar />
      <Legend />
      <div
        ref={mapContainer}
        style={{
          marginLeft: '25%',
          marginTop: '72px',
          width: '75%',
          height: 'calc(100vh - 72px)',
        }}
      />
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
