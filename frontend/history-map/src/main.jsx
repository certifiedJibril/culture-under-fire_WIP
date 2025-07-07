import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import MapView from './MapView.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapView />
  </React.StrictMode>
)
