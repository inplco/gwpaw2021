import React from 'react';
import './App.css';
import Voting from './components/Voting/Voting';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Logout from './components/Logout/Logout';
import Session from './components/Session/Session';
import Main from './components/Main/Main';

function App() {

 return (
   <div className="App">
     <Router basename="/gwpaw2021">
         <Routes>
           <Route exact path='/' element={<Landing/>}/>
           <Route exact path='/main' element={<Main/>}/>
           <Route exact path='/session' element={<Session/>}/>
           <Route exact path='/voting' element={<Voting/>}/>
           <Route exact path='/logout' element={<Logout/>}/>
         </Routes>
     </Router>
   </div>
 );
}

export default App;
