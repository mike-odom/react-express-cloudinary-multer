import React, { Component } from "react";
import Uploader from "./components/Uploader";
import logo from "./logo.svg";
import "./App.css";

/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's upload to Cloudinary!</h2>
        </div>

        <Uploader/>
      </div>
    );
  }
}

export default App;