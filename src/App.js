import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
    }else{
      setMode("dark");
      document.body.style.backgroundColor = "#2a335a";
    }
  }
  return (
   <>
<Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading="Enter the text for analyze" mode={mode}/>
</div>
   </>
  );
}

export default App;
