import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  } 
  
  const handleCopyClick = (event) => {
    let text = document.getElementById("myBox");
    text.select(); 
    navigator.clipboard.writeText(text.value); 
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log(text);
  }
  const [text, setText] = useState("");
  return (
    <><div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
        <textarea className="form-control" id="myBox" rows="8" placeholder="Enter your text here" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
      </div>
      <div>
        <h2 className='my-3'>Your text summary</h2>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>{0.008*`${text.split(" ").length-1}`} Minute for read</p>
        <h3>Preview</h3>
        {/* <p>{text.length>0?text:"Enter Somthing in text-box to preview"}</p> */}
      </div>
    </>
  )
}
