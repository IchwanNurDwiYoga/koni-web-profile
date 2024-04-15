import axios from "axios";

const Api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // baseURL: "https://660cd91e3a0766e85dbec1e9.mockapi.io/api/",
});

export default Api