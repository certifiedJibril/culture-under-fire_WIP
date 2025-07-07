import React from 'react';

const items = [
  { emoji: '🗿', label: 'Monument' },
  { emoji: '🏛️', label: 'Museum' },
  { emoji: '⛪', label: 'Church' },
  { emoji: '📚', label: 'Library' },
  { emoji: '🗽', label: 'Statue' },
  { emoji: '🎭', label: 'Theater' },
  { emoji: '📍', label: 'Other' },
  { emoji: '🏰', label: 'Historic Building' },
  { emoji: '🎪', label: 'Cultural Center' },
  { emoji: '🎓', label: 'Educational Institution' },
];

const colors = [
  // Removed INTACT green color as requested
  { color: '#f39c12', label: 'Damaged' },
  { color: '#e74c3c', label: 'Destroyed' },
];

export default function Legend() {
  return (
    <aside style={legendStyle}>
      <h2 style={{ marginBottom: '1.5rem', fontWeight: '700', fontSize: '1.4rem' }}>Legend</h2>

      <div>
        <h3 style={sectionTitleStyle}>Types</h3>
        {items.map(({ emoji, label }) => (
          <div key={label} style={itemStyle}>
            <span style={emojiStyle}>{emoji}</span>
            <span style={labelStyle}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <h3 style={sectionTitleStyle}>Status</h3>
        {colors.map(({ color, label }) => (
          <div key={label} style={itemStyle}>
            <div style={{ ...colorBoxStyle, backgroundColor: color }}></div>
            <span style={labelStyle}>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

const legendStyle = {
  width: '25%',
  minWidth: '220px',
  backgroundColor: '#f9fafb',
  borderRight: '1px solid #ddd',
  padding: '1.5rem 2rem',
  boxSizing: 'border-box',
  height: 'calc(100vh - 72px)', // navbar height
  position: 'fixed',
  top: '72px',
  left: 0,
  overflowY: 'auto',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  color: '#333',
  boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
  userSelect: 'none',
};

const sectionTitleStyle = {
  marginBottom: '1rem',
  color: '#0d6efd',
  fontWeight: '600',
  fontSize: '1.1rem',
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
};

const emojiStyle = {
  fontSize: '1.8rem',
  marginRight: '0.75rem',
  userSelect: 'none',
};

const labelStyle = {
  fontSize: '1rem',
};

const colorBoxStyle = {
  width: '22px',
  height: '22px',
  marginRight: '0.75rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
};
