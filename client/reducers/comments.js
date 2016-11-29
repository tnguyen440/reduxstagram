import * as types from '../actions/actionTypes';

function postComments(state= [], action) {
    switch(action.type) {
        case types.ADD_COMMENT:
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case types.REMOVE_COMMENT:
            //return the new state wihout the deleted comment
            return [
                //from the start to the one we want to delete
                ...state.slice(0, action.i),
                //after the deleted one, to the end
                ...state.slice(action.i + 1)
            ];
        default:
            return state;        
    }
    return state;
}

function comments(state= [], action) {
    if(typeof action.postId !== 'underfined') {
        return {
            //take the current state
            ...state,
            //overdrive this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;