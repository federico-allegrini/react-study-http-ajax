import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      // For production set redirect of 404 pages to index.html
      // This because all routes are inside the react routes in index.html!
      // Server doesn't know the other routes

      // If you use a sub directory in production server use "basename" for set basepath
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
