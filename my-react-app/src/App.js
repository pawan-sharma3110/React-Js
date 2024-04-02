import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title="TextUtils" aboutText="About TextUtils" />
      </React.Fragment>
    );
  }
}

export default App;
