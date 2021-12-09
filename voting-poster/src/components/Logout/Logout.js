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
     <h1 className="main-heading" style={{ marginTop: -10, fontWeight: 500, fontSize: 24 }}>YOUR VOTE IS CAST! THANK YOU!</h1>
     <a style={{ color:'#FFFFFF' }} href="/">HOME</a>
     <br></br><br></br>
     <div className="footer" style={{ position:'fixed' }}>
       <div>
         <img class="thumbnailgit" src="/gwpaw2021/github.png"/><a href="https://github.com/inplco/gwpaw2021" target="_">github.com/inplco/gwpaw2021</a>
       </div>
       <div style={{ marginTop:-13 }}>
         <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
       </div>
     </div>
    </div>
  )
}
