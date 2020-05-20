import React from 'react';
import Square from '/Users/afamily/Ibraheem/dev/tictactoe/src/components/Square'
import { useSelector } from 'react-redux'

const SymbolDisplay = props => {
    
    const turn = useSelector(state => state.turn);
    return (
      <div className="game noSelect">
        <div className="game-board">
          <div className="board-row">
            <Square id={0}/>
            <Square id={1}/>
            <Square id={2}/>
          </div>
          <div className="board-row">
            <Square id={3}/>
            <Square id={4}/>
            <Square id={5}/>
          </div>
          <div className="board-row">
            <Square id={6}/>
            <Square id={7}/>
            <Square id={8}/>
          </div>
          <p>Turn: {turn}</p>
          {/* {<tbody>
            {squares.map(function (square, i) {
              return <p>Square No. {i}: {squares[i].symbol}</p>;
            })}
          </tbody>} */}
        </div>
      </div>
    );
  };


export default SymbolDisplay