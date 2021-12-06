import React, { useState } from 'react';
import './App.css';
import Voting from './components/Voting/Voting';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import useToken from './useToken';

function App() {

 const { token, setToken } = useToken();

 if(!token) {
   return <Login setToken={setToken} />
 }

 return (
   <div className="App">
     <br></br>
     <div className="app-logo">
     </div>
     <Router>
         <Routes>
           <Route exact path='/' element={<Main/>}/>
           <Route exact path='/voting' element={<Voting/>}/>
           <Route exact path='/main' element={<Main/>}/>
           <Route exact path='/logout' element={<Logout/>}/>
         </Routes>
     </Router>
   </div>
 );
}

export default App;
