import React from 'react';

function Restart({ onRestart }) {
  return (
    <button onClick={onRestart} className="restart-button">
      Restart
    </button>
  );
}

export default Restart;