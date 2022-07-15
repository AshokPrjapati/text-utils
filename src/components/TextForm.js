import React from "react";

export default function TextForm(props) {
  const handleUPClick = () => {
    console.log("UpperCase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
     text = event.target.value;
    // console.log(text);
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUPClick}>
        Convert to Uppercase
      </button>
    </>
  );
}
