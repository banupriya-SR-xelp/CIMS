import React, { Component } from "react";
import "./App.css";
import Auth from "./Auth"
import Header from "./Header.js";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="formData">
      <Header/>
        <Auth/>
      </div>
      
    );
  }
}

export default App;
