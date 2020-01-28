import React from 'react';
import declareWinner from '/Users/afamily/Ibraheem/dev/tictactoe/src/logic/declareWinner'

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

  export default Square