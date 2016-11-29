import * as types from './actionTypes';


//increment likes
export function increment(index) {
    return {
        type: types.INCREMENT_LIKES,
        index
    };
}

//add comment
export function addComment(postId, author, comment) {
    //console.log("Firing adding comment");    
    return {
        type: types.ADD_COMMENT,
        postId,
        author,
        comment
    };
}

//remove comment
export function removeComment(postId, i) {
    return {
        type: types.REMOVE_COMMENT,
        postId,
        i
    };
}