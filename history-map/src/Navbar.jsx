import React from 'react';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Culture Under Fire Project</h1>
        <div style={buttonsContainer}>
          <button style={btnStyle} onClick={() => alert('Support page coming soon!')}>
            Support
          </button>
          <button style={btnStyle} onClick={() => alert('This project documents endangered cultural sites in Ukraine.')}>
            What is this project
          </button>
        </div>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #ddd',
  padding: '1rem 2rem',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap', // allow wrapping to prevent overflow
  gap: '1rem',
};

const titleStyle = {
  margin: 0,
  fontSize: '1.9rem',
  fontWeight: '700',
  color: '#333',
  flex: '1 1 auto',
  minWidth: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const buttonsContainer = {
  display: 'flex',
  gap: '1rem',
  flexShrink: 0,
};

const btnStyle = {
  backgroundColor: '#0d6efd',
  border: 'none',
  padding: '0.6rem 1.2rem',
  color: 'white',
  fontSize: '1rem',
  borderRadius: '0.375rem',
  cursor: 'pointer',
  fontWeight: '600',
  boxShadow: '0 2px 4px rgba(0,123,255,0.4)',
  whiteSpace: 'nowrap',
};
