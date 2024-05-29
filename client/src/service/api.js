import axios from "axios";

const url = "http://localhost:9000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${url}/add`, data);
  } catch (err) {
    console.log("Error while calling add user API", err);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${url}/all`);
  } catch (err) {
    console.log("Error while calling get users API", err);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${url}/${id}`);
  } catch (err) {
    console.log("Error while calling get user API", err);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.put(`${url}/${id}`, user);
  } catch (err) {
    console.log("Error while calling edit user API", err);
  }
};

export const deleteData = async (id) => {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (err) {
    console.log("Error while calling delete user API", err);
  }
};
