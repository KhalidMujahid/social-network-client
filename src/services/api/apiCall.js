import axios from "axios";

const apiCall = axios.create({
  baseURL: import.meta.env.VITE_NODE_ENV === "development" ? import.meta.env.VITE_BASE_URL : import.meta.env.GLOBAL_URL,
});

export default apiCall;
