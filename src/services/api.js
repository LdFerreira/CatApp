import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': '92c0e733-a583-41ee-be71-beb38b2e2f0a',
  },
});

export default api;
