import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    console.log("[Index.js] Interceptor Request: ", request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log("[Index.js] Interceptor Request: ", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("[Index.js] Interceptor Response: ", response);
    return response;
  },
  (error) => {
    console.log("[Index.js] Interceptor Response: ", error);
    return Promise.reject(error);
  }
);

// Removing
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
