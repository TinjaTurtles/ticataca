import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './CalculateWinner';
import Restart from './Restart';

function UltimateTicTacToe() {
  const initialBoard = Array(9).fill(null).map(() => Array(9).fill(null));
  const [boards, setBoards] = useState(initialBoard);
  const [activeBoard, setActiveBoard] = useState(null);
  const [isX, setIsX] = useState(true);

  const handleBoardClick = (boardIndex, squareIndex) => {
    if (activeBoard !== null && activeBoard !== boardIndex) {
      return;
    }

    const updatedBoards = boards.map((board, index) => {
      if (index === boardIndex) {
        return board.map((square, squareIdx) => {
          if (squareIdx === squareIndex) {
            return isX ? 'X' : 'O';
          }
          return square;
        });
      }
      return board;
    });

    setBoards(updatedBoards);
    setActiveBoard(squareIndex);
    setIsX(!isX);
  };

  const restartGame = () => {
    setBoards(initialBoard);
    setActiveBoard(null);
    setIsX(true);
  };

  const winner = calculateWinner(boards[activeBoard]);

  return (
    <div className="ultimate-tic-tac-toe">
      {winner && <div className="winner">Winner: {winner}</div>}
      <div className="board-container">
        {boards.map((board, index) => (
          <Board
            key={index}
            squares={board}
            active={activeBoard === index}
            onClick={(squareIndex) => handleBoardClick(index, squareIndex)}
          />
        ))}
      </div>
      <Restart onRestart={restartGame} />
    </div>
  );
}

export default UltimateTicTacToe;