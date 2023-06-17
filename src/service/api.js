import axios from "axios";

const ResbalaApi = axios.create({
  baseURL: "https://resbalacustos.com/api",
});

export default ResbalaApi;