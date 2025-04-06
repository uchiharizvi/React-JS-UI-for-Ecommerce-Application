import axios from "axios";

const API_BASE_URL = 'http://localhost:8081/api/v1/auth';

export const register = (user) => {
    return axios.post(`${API_BASE_URL}/register`, user);
}
export const login = (user) => {
    return axios.post(`${API_BASE_URL}/login`, user);
}
// export const login = (credentials) => API.post("/login", user);