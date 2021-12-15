import React, { useEffect } from 'react';
import {createBrowserHistory} from 'history';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

const browserHistory = createBrowserHistory();

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const deleteCookie = async () => {
  try {
    console.log('signing vote and logging out');
    await axios.get('/sign-vote');
    console.log('logged out!');
    const type = 'auth';
  } catch (e) {
    console.log(e);
  }
};

function ClearLocal() {
  useEffect(() => {
    deleteCookie();
  }, []);
  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event)
  {
    window.history.pushState(null, document.title, window.location.href);
  });
  window.localStorage.clear();
  window.sessionStorage.clear();
  window.sessionStorage.setItem('activeSession', 'false');
  browserHistory.push({ pathname: '/gwpaw2021/logout' });
  setTimeout(function() {
    window.location.replace('http://inpl.one');
  }, 5000);
  return null;
}

export default function Logout() {
  return (
    <div>
      <ScrollToTopOnMount />
      <div className="app-logo"></div>
      <div className="main-container">
       <h1 className="main-heading" style={{ marginTop: -10, fontWeight: 500, fontSize: 24 }}>YOUR SESSION IS CLOSED! THANK YOU!</h1>
       <a style={{ color:'#FFFFFF' }} href="/">HOME</a>
       <p style={{ color:'#4afcff', fontSize:14, marginTop:-2 }} href="/">[auto-redirect in 3-5 seconds]</p>
       <br></br><br></br>
       <div className="footer" style={{ position:'fixed' }}>
         <div>
           <img alt="logo" className="thumbnailjs" src="/gwpaw2021/nodejs.svg"/>
           <img alt="logo" className="thumbnailjs" src="/gwpaw2021/reactjs.png"/>
           <img alt="logo" className="thumbnailgit" src="/gwpaw2021/github.png"/><a href="https://github.com/inplco/gwpaw2021" target="_">github.com/inplco/gwpaw2021</a>
         </div>
         <div style={{ marginTop:-13 }}>
           <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
         </div>
       </div>
      </div>
      <ClearLocal />
    </div>
  )
}
