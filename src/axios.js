import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-feb20-5107b.cloudfunctions.net/api',
});

export default instance;
