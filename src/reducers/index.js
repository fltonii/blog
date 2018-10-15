import { combineReducers } from 'redux';
import PostListReducer from './reducer_posts_list';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  postList: PostListReducer,
  form: formReducer,
});

export default rootReducer;
