import React, { useState } from 'react';
import './App.css';
import Voting from './components/Voting/Voting';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login';

function App() {
 const [token, setToken] = useState();
/*
 if(!token) {
   return <Login setToken={setToken} />
 }
*/
 return (
   <div className="App">
     <br></br>
     <div className="app-logo">
     </div>
     <Router>
         <Routes>
           <Route exact path='/voting' element={<Voting/>}/>
           <Route exact path='/' element={<Main/>}/>
         </Routes>
     </Router>
   </div>
 );
}

export default App;
