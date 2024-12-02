import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://sandbox-api.okto.tech/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },

});


apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default  apiClient;
