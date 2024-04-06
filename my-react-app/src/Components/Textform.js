import React, { useState } from "react";

export default function Textarea(props) {
  // const [highlight, setHighlight] = useState(false);
  const [text, setText] = useState("");

  const handelUPCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "Success");
  };

  const handelLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "Success");
  };

  const handelOnChanged = (event) => {
    setText(event.target.value);
  };

  // const handelHighLightCase = () => {
  //   setHighlight(!highlight); // Toggle highlight state
  // };
  const handelClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text box clean!", "Success");
  };
  const handelCopyText = () => {
    let textCopy = document.getElementById("mybox");
    textCopy.select();
    textCopy.setSelectionRange(0, textCopy.value.length);
    navigator.clipboard.writeText(textCopy.value);
  };
  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space remove!", "Success");
  };

  return (
    <React.Fragment>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="5"
            value={text}
            onChange={handelOnChanged}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-3" onClick={handelUPCase}>
          Convert Text To Upper Case
        </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handelLowCase}>
          Convert Text To Lower Case
        </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handelClearText}>
          Clear Text
        </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handelCopyText}>
          Copy Text
        </button>
        <button type="button" className="btn btn-primary mx-3" onClick={handelExtraSpace}>
          Remove extra space
        </button>

        {/* <button type="button" className="btn btn-warning mx-3" onClick={handelHighLightCase}>
          {highlight ? "Unhighlight" : "Highlight Text"}
        </button> */}
      </div>
      <div
        className="container  my-4"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words And {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes Spent To Read It</p>
        <h2>Text Preview</h2>
        {/* <p className={highlight ? "highlighted" : ""}>{text}</p> */}
        <p>{text.length > 0 ? text : "Enter Your Text Upper Textbox To Preview Here"}</p>
      </div>
    </React.Fragment>
  );
}
