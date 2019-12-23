import React from 'react';
import './App.css';

const Square = props => {
  const [color, setColor] = React.useState("Black")
  let symbolCopy = [...props.symbol];
  
  const handleClick = () => {
    if (props.symbol[props.id] === null) {
      props.setTurn(props.turn + 1);
      console.log("set turn")
      if (props.turn % 2 === 0) {
        symbolCopy[props.id] = "x";
        props.setSymbol(symbolCopy)
        console.log("set symbol - x")
      } else {
        symbolCopy[props.id] = "o";
        props.setSymbol(symbolCopy)
        console.log("set symbol - o")
      }
    }
    declareWinner(props.symbol);
  };

  return <button className="square" style={{ color: color }} onClick={handleClick}>{props.symbol[props.id]}</button>
};
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

const Board = props => {
  return <SymbolDisplay />;
};

const utils = {
  rows: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
};

const declareWinner = (squares) => {
  utils.rows.forEach(
    x => {
      console.log(x[0])
      console.log(squares[x[0]])
      console.log(x[1])
      console.log(squares[x[1]])
      console.log(x[2])
      console.log(squares[x[2]])
      if (squares[x[0]] !== null && squares[x[1]] !== null && squares[x[2]] !== null) {
        if (squares[x[0]] === squares[x[1]] && squares[x[1]] === squares[x[2]]) {
          console.log("You Win!!!!!!")
        }
      }
      console.log("--------------")
    }
  );
};
export default Board;

