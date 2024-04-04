import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js";
// import TextForm from "./Components/Textform.js";
import About from "./Components/About.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title="TextUtils" aboutText="About TextUtils" />
        <div className="container my-3">
          {/* <TextForm heading="Enter Your Text To Anylise : "></TextForm> */}
          <About />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
