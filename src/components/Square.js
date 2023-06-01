import React from 'react';

function Square({ value, onClick, active }) {
  return (
    <button className={`square ${active ? 'active' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;