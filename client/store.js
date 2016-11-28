import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHitory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

import comments from './date/comments';
import posts from './date/posts';

//create an object for the default data 
export const defaultstate = {
    posts,
    comments
};

export const store = createStore(rootReducer, defaultStatus);

export const history = syncHistoryWithStore(browserHitory, store);

export default store;