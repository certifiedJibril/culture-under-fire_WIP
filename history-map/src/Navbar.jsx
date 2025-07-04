import React from 'react';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={brandStyle}>History Under Fire</div>
        <div style={optionsStyle}>
          <button disabled style={btnStyle}>Option 1</button>
          <button disabled style={btnStyle}>Option 2</button>
        </div>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#0d6efd',
  padding: '0.5rem 1rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  color: 'white',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1000,
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const brandStyle = {
  fontWeight: '600',
  fontSize: '1.25rem',
  userSelect: 'none',
};

const optionsStyle = {
  display: 'flex',
  gap: '0.75rem',
};

const btnStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  border: 'none',
  padding: '0.375rem 0.75rem',
  color: 'white',
  borderRadius: '0.375rem',
  cursor: 'not-allowed',
  fontSize: '0.9rem',
  transition: 'background-color 0.2s ease',
  userSelect: 'none',
};

