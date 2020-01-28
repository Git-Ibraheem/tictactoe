const initState = {
    turn: 0,
    squares: [null, null, null, null, null, null, null, null, null]
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { 
                turn: state.turn + 1,
                ...state
            }
        case 'SET_SYMBOL':
            return { 
                ...state.turn,
                squares: state.squares.map(
                    (item, index) => {
                        if(index === action.id) {
                            return action.newSymbol;
                        }
                    return item;
                    }
                )
            }   
        default: 
            return state;
    }
}

export default rootReducer