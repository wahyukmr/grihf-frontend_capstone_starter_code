import React from 'react';

function Star({ selected, onClick }) {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer' }}>
      {selected ? '★' : '☆'}
    </span>
  );
}

export default Star;
