import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import posts from './posts/posts';

export default combineReducers({ posts, form });
