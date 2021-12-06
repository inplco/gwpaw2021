import React from 'react';
import {createBrowserHistory} from 'history';
import { Navigate, Link } from "react-router-dom";

const browserHistory = createBrowserHistory();

export default function Logout() {
  localStorage.clear();
  sessionStorage.clear();
  browserHistory.push({ pathname: '/logout' });
  return (
    <div className="main-container">
     <h1 className="main-heading" style={{ marginTop: -100, fontWeight: 500, fontSize: 24 }}>You have been logged out</h1>
     <a style={{ color:'#FFFFFF' }} href="/">CLOSE THIS WINDOW</a>
     <br></br><br></br>
     <div className="footer" style={{ position:'fixed' }}>
       <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
     </div>
    </div>
  )
}
