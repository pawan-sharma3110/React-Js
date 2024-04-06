import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/Textform.js";
import Alert from "./Components/Alert.js";
// import About from "./Components/About.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <React.Fragment>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Your Text To Analyze : " mode={mode} />
      </div>
    </React.Fragment>
  );
}
export default App;
