import { combineReducers } from 'redux';
import PostListReducer from './reducer_posts_list';
import ReducerSelectedPost from './reducer_selected_post';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  postList: PostListReducer,
  form: formReducer,
  selectedPost: ReducerSelectedPost
});

export default rootReducer;
