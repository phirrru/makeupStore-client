import axios from "axios";

const BASE_URL = "http://localhost:5500/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTk1NGZkZTY2ZmJhNjJmZmY1NWU5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzgzODA4NSwiZXhwIjoxNjg0MDk3Mjg1fQ.mrb6oa0Rfu2SRWegKmsHA8K647Z76BiZkUJJKf8DRgc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
