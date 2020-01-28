import React from 'react';
import declareWinner from '/Users/afamily/Ibraheem/dev/tictactoe/src/logic/declareWinner'
import { useSelector, useDispatch } from 'react-redux'

const Square = props => {
 
    const turn = useSelector(state => state.turn);
    const symbol = useSelector(state => state.squares[props.id]);
    const dispatch = useDispatch();

    const handleClick = () => {
      if (symbol === null) {
        dispatch({type: "INCREMENT"})
        if (turn % 2 === 0) {
          dispatch({type: "SET_SYMBOL", id: props.id, newSymbol: 'x'})
        } else {
          dispatch({type: "SET_SYMBOL", id: props.id, newSymbol: 'o'})
        }
      }
      //declareWinner(squares);
    };
  
    return <button className = "square" onClick = {handleClick}> {symbol} </button>
  };

  export default Square