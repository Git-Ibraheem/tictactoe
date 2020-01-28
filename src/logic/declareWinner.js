const declareWinner = (squares) => {
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

export default declareWinner