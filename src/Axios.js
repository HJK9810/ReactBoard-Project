import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

// for json header
Axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

export default Axios;
