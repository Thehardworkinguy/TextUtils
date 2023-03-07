import './App.css';
// import About from './components/About';
import React,{useState} from 'react';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const[mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>
   {
    setAlert({
      msg : message,
      type : type

   })

   setTimeout(()=>{
     
    setAlert(null);

   },3000);

  }

  const Enablemode=()=>
  {

    if(mode ==='dark')
    {

       setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","Success");
    }

    else{

      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("dark mode has been enabled","Success");
    }

  }

  


  return (
   <>
   {/* <BrowserRouter> */}
    <Navbar title='TextUtils' mode={mode} toggleMode={Enablemode} aboutText='About'/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className='container my-3'>
     {/* <Routes>
      <Route path="/about" element={<About/>}>
        
      </Route>
     
      <Route path ="/" element={<TextForm showalert={showAlert} heading="Please Enter Some Text" mode={mode}/>}>
         <TextForm showalert={showAlert} heading="Please Enter Some Text" mode={mode}/>
        
      </Route>
      </Routes> */}
      <TextForm showalert={showAlert} heading="Please Enter Some Text" mode={mode}/>
        
      </div>
      {/* </BrowserRouter>  */}
       
  </>

  );
}

export default App;
