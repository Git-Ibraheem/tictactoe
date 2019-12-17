import React from 'react';
import './App.css';

const Square = props => {
  let symbolCopy = [...props.symbol];
  const handleClick = () => {
    if (props.symbol[props.id] === "" ) {
    if (props.turn%2 === 0){
      symbolCopy[props.id] = "x";
      props.setSymbol(symbolCopy)
    } else {
      symbolCopy[props.id] = "o";
      props.setSymbol(symbolCopy)
    }
  }
    if (props.symbol[props.id] !== "" ) {
      //console.log("dasdsadsadsaads")
      //let turn = props.turn - 1;
      //props.setTurn(turn);
    }
  };
  return <button className="square" onClick={handleClick}>{props.symbol[props.id]}</button>
};
const SymbolDisplay = props => {
  const [turn, setTurn] = React.useState(0)
  const [squares, setSquares] = React.useState(["","","","","","","","",""])
  const handleClick = () => {
    declareWinner(squares);
    setTurn(turn + 1);
  };
  return (
    <div className="game noSelect">
      <div className="game-board" onClick={handleClick}>
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
        <p>turn: {turn}</p>
        <p>squares: {squares}</p>
      </div>
    </div>
  );
};

const Board = props => {
  return <SymbolDisplay />;
};

const utils = {
  rows:[
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
      if (squares[x[0]] !== "" && squares[x[1]] !== "" && squares[x[2]] !== "") {
        if (squares[x[0]] === squares[x[1]] &&
          squares[x[1]] === squares[x[2]]) {
          console.log("You Win!!!!!!")
        }
      }
    }
  );
};
export default Board;

