import React, { useState } from "react";

export default function Textarea(props) {
  const [highlight, setHighlight] = useState(false);
  const [text, setText] = useState("");

  const handelUPCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handelOnChanged = (event) => {
    setText(event.target.value);
  };

  const handelHighLightCase = () => {
    setHighlight(!highlight); // Toggle highlight state
  };
  const handelClearText = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="5"
            value={text}
            onChange={handelOnChanged}
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
        <button type="button" className="btn btn-warning mx-3" onClick={handelHighLightCase}>
          {highlight ? "Unhighlight" : "Highlight Text"}
        </button>
      </div>
      <div className="container  my-4">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words And {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes Spent To Read It</p>
        <h2>Text Preview</h2>
        <p className={highlight ? "highlighted" : ""}>{text}</p>
      </div>
    </React.Fragment>
  );
}
