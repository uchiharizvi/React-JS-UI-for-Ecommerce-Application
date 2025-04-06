import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:8081/api/v1/auth",
});
export const register = (user) => API.post("/register", user);
export const login = (credentials) => API.post("/login", user);