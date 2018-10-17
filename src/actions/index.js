import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';

const RAW_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'marcasdecasconochao';

export function fetchPosts() {
  let url = `${RAW_URL}/posts?key=${API_KEY}`;
  let response = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: response
  };
}

export function createPost(values, navigate) {
  let url = `${RAW_URL}/posts?key=${API_KEY}`
  let response = axios.post(url, values).then(() => navigate() );
  return {
    type: CREATE_POST,
    payload: response
  }
}

export function fetchPost(id) {
  let url = `${RAW_URL}/posts/${id}`;
  let response = axios.get(url);
  return {
    type: FETCH_POST,
    payload: response
  }
}
