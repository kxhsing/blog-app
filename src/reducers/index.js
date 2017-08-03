import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer //important! key has to be form
  
});

export default rootReducer;
