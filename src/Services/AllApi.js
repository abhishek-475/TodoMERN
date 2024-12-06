import axios from "axios";

const base_url = "https://todoserver-izor.onrender.com/";

export const addTask = async (data) => {
  return await axios.post(`${base_url}add`, data);
};

export const getTasks = async () => {
  return await axios.get(`${base_url}all`);
};

export const updateTask = async (id, status) => {
  return await axios.put(`${base_url}update/${id}`, { status });
};

export const deleteTask = async (id) => {
  return await axios.delete(`${base_url}delete/${id}`);
};

