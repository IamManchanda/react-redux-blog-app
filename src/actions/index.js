import axios from 'axios';

const API_KEY = 'HarryManchanda';
const apiUrl = `http://reduxblog.herokuapp.com/api/posts?key=${API_KEY}`;
const apiUrlWithId = (id) => `http://reduxblog.herokuapp.com/api/posts/${id}?key=${API_KEY}`;

export const CREATE_POSTS = 'CreatePosts';
export const FETCH_POSTS = 'FetchPosts';
export const FETCH_POST = 'FetchPost';
export const DELETE_POST = 'DeletePost';

export const fetchPosts = () => {
  const request = axios.get(apiUrl);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
};

export const createPosts = (values, callback) => {
  const request = axios.post(apiUrl, values)
    .then(() => callback());
  return {
    type: CREATE_POSTS,
    payload: request,
  };
};

export const fetchPost = (id) => {
  const request = axios.get(apiUrlWithId(id));
  return {
    type: FETCH_POST,
    payload: request,
  };
};

export const deletePost = (id, callback) => {
  const request = axios.delete(apiUrlWithId(id))
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id,
  };
};
