import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const RAW_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'ventocavalopeao';

export function fetchPosts() {
  let url = `${RAW_URL}/posts?key=${API_KEY}`;
  let response = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: response
  };
}
