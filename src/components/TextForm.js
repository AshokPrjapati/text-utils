import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
  } 
  
  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select(); 
    navigator.clipboard.writeText(text.value); 
    props.showAlert("Copied to clipboard","success");
  }

  const handleRemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  } 

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log(text);
  }
  const [text, setText] = useState("");
  return (
    <><div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h2 style={{color:props.mode==="dark"?"white":"black"}}>{props.heading}</h2></label>
        <textarea className="form-control" id="myBox" rows="8" placeholder="Enter your text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black" }}></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      </div>
      <div style={{color:props.mode==="dark"?"white":"black"}}>
        <h2 className='my-3'>Your text summary</h2>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>{0.008*`${text.split(" ").length-1}`} Minute for read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Somthing in text-box to preview"}</p>
      </div>
    </>
  )
}
