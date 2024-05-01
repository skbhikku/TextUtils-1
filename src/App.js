// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App(props) {
    const [mode, setMode] = useState("light");
    const toggle = () => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#000000";
        showAlert("Dark Mode is Enable","success")
        document.title="TextUtils - DarkMode"
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("White Mode is Enable","success")
        document.title="TextUtils - WhiteMode"
  
      }
    };
  const [alert,setalert]=useState(null)
    const showAlert = (mess,type)=>{
        setalert({
          msg:mess,
          type:type
        })
      setTimeout(()=>{
        setalert(null);
      },1000)
    }

  return (
    <>
       
    <BrowserRouter>
    
    <Navbar title="TextUtils " about=" About" modes={toggle} mode={mode} />
    <Alert alert={alert}></Alert>
    <div>
      <Routes>
    <Route path="/" element={
      <TextForm heading="Enter the Text analyzer"  showAlert={showAlert} mode={mode} />       
    } />

      <Route path="/about" element={<About mode={mode} toggle={toggle} />} />

      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
