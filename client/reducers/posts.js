import * as types from '../actions/actionTypes';
//a reducer takes in 2 things

//1. the action (infor about what happened)
//2. copy of current state

function posts(state= [], action) {
    //console.log(state, action);
    
    switch(action.type) {
        case types.INCREMENT_LIKES :
            console.log("Incrementing likes");
            const i = action.index;
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) //after the one we are udpating
            ]
        default: 
            return state;
    }
}

export default posts;