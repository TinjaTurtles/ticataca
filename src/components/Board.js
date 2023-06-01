import React from 'react';
import Square from './Square';

function Board({ squares, active, onClick }) {
  const renderSquare = (row, col) => {
    const squareIndex = row * 3 + col;
    return (
      <Square
        key={squareIndex}
        value={squares[squareIndex]}
        onClick={() => onClick(squareIndex)}
        active={active}
      />
    );
  };

  return (
    <div className="board">
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => renderSquare(row, col))}
        </div>
      ))}
    </div>
  );
}

export default Board;
