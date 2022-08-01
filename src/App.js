//import logo from './logo.svg';
//import './App.css';
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from 'react';
// import { BrowserRouter as Router, 
//         Routes, 
//         Route, 
//         link
//         } from "react-router-dom"

  function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);

  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark Mode is Enabled","success")
    }
    else{
      setMode('light');
     document.body.style.backgroundColor ='white';
     showAlert("Light Mode is Enabled","success")
    }   

  }
  return (
  <>
  <Navbar title="Mindtree" abouttext="Help" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
  <TextFrom showAlert={showAlert} heading="Enter the text" mode={mode}></TextFrom>
  <About></About>
  </div>






{ /* <Router>
 <Navbar title="Mindtree" abouttext="Help" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container">
  <Routes>
       <Route path="/About" element={<About></About>} />
       <Route path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text" mode={mode}></TextFrom>}/>
  </Routes>
 </div>
  </Router> */ }
</>
  );
}
export default App;
