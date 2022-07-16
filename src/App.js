import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode is disabled", "success");
      document.title = "TextUtils-Light mode"
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2a335a";
      showAlert("Dark Mode is enabled", "success")
      document.title = "TextUtils-Dark mode"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text for analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
