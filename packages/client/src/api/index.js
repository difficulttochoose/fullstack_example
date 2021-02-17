import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export const createUser = (data) => api.post('/user', data);
export const getUsers = () => api.get('/users');
export const deleteUserById = (id) => api.delete(`/user/${id}`);

export default api;
