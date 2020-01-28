import React from 'react';
import Square from '/Users/afamily/Ibraheem/dev/tictactoe/src/components/Square'

const SymbolDisplay = props => {
    const [turn, setTurn] = React.useState(0)
    const [squares, setSquares] = React.useState([null, null, null, null, null, null, null, null, null,])
    return (
      <div className="game noSelect">
        <div className="game-board">
          <div className="board-row">
            <Square setTurn={setTurn} turn={turn} id={0} symbol={squares} setSymbol={setSquares} />
            <Square setTurn={setTurn} turn={turn} id={1} symbol={squares} setSymbol={setSquares} />
            <Square setTurn={setTurn} turn={turn} id={2} symbol={squares} setSymbol={setSquares} />
          </div>
          <div className="board-row">
            <Square setTurn={setTurn} turn={turn} id={3} symbol={squares} setSymbol={setSquares} />
            <Square setTurn={setTurn} turn={turn} id={4} symbol={squares} setSymbol={setSquares} />
            <Square setTurn={setTurn} turn={turn} id={5} symbol={squares} setSymbol={setSquares} />
          </div>
          <div className="board-row">
            <Square setTurn={setTurn} turn={turn} id={6} symbol={squares} setSymbol={setSquares} />
            <Square setTurn={setTurn} turn={turn} id={7} symbol={squares} setSymbol={setSquares} />
            <Square setTurn={setTurn} turn={turn} id={8} symbol={squares} setSymbol={setSquares} />
          </div>
          <p>Turn: {turn}</p>
          <tbody>
            {squares.map(function (square, i) {
              return <p>Square No. {i}: {squares[i]}</p>;
            })}
          </tbody>
        </div>
      </div>
    );
  };

export default SymbolDisplay