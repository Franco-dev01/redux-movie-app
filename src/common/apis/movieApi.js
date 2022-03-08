import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTliNTg3ZmVjZDg0ZjBhNjY4NWRiOTQyMmUyNjlhMiIsInN1YiI6IjVkOWM4MGMyNmQ2NzVhMDAyOGYzNWE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_hrgf_MPxvQW2yEYRTidwCymXbNj8hDXKpo2c_J4s4";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
