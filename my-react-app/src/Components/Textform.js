import React, { useState } from "react";

export default function Textarea(props) {
 
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
  const [text, setText] = useState("Enter Text Here");
  return (
    <div>
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
      <button type="button" className="btn btn-primary" onClick={handelUPCase}>
        Conver Text To Upper Case
      </button>
      <button
        type="button"
        className="btn btn-primary lower-case"
        onClick={handelLowCase}
      >
        Conver Text To Lower Case
      </button>
    </div>
  );
}
