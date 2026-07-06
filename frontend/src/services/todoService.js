import axios from "axios";

//const API_URL = "http://localhost:5000/api/todos";
const API_URL = "http://localhost:5000/todos";


export const getTodos = () => {
  return axios.get(API_URL);
};


export const getTodoById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};


export const createTodo = (todo) => {
  return axios.post(API_URL, todo);
};


export const updateTodo = (id, todo) => {
  return axios.put(`${API_URL}/${id}`, todo);
};


export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};


export const updateTodoStatus = (id, status) => {
  return axios.patch(`${API_URL}/${id}/status`, {
    completed: status,
  });
};


export const searchTodos = (keyword) => {
  return axios.get(`${API_URL}/search?keyword=${keyword}`);
};
