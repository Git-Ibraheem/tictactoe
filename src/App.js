import React from 'react';
import './App.css';

const Square = props => {
  const [symbol, setSymbol] = React.useState()
  const handleClick = () => {
  if (props.turn%2 === 0){
      setSymbol("x")
    } else {
      setSymbol("o")
    }
  };
  return <button className="square" onClick={handleClick}>{symbol}</button>
};
const SymbolDisplay = props => {
  const [turn, setTurn] = React.useState(0)
  return (
    <div className="game noSelect">
      <div className="game-board" onClick={() => setTurn(turn + 1)}>
        <div className="board-row">
          <Square turn={turn} />
          <Square turn={turn} />
          <Square turn={turn} />
        </div>
        <div className="board-row">
          <Square turn={turn} />
          <Square turn={turn} />
          <Square turn={turn} />
        </div>
        <div className="board-row">
          <Square turn={turn} />
          <Square turn={turn} />
          <Square turn={turn} />
        </div>
      </div>
    </div>
  );
};

const Board = props => {
  return <SymbolDisplay />;
};

export default Board;

