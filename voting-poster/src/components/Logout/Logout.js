import React, { useEffect } from 'react';
import {createBrowserHistory} from 'history';
import axios from 'axios';

const browserHistory = createBrowserHistory();

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const deleteCookie = async () => {
  try {
    console.log('logging out');
    await axios.get('/clear-cookie');
    console.log('logged out');
    const type = 'auth';
  } catch (e) {
    console.log(e);
  }
};

function ClearLocal() {
  localStorage.clear();
  sessionStorage.clear();
  browserHistory.push({ pathname: '/' });
  useEffect(() => {
    deleteCookie();
  }, []);
  return null;
}

export default function Logout() {

  return (
    <div>
      <ScrollToTopOnMount />
      <ClearLocal />
      <div className="app-logo"></div>
      <div className="main-container">
       <h1 className="main-heading" style={{ marginTop: -10, fontWeight: 500, fontSize: 24 }}>YOUR SESSION IS CLOSED! THANK YOU!</h1>
       <a style={{ color:'#FFFFFF' }} href="/">HOME</a>
       <br></br><br></br>
       <div className="footer" style={{ position:'fixed' }}>
         <div>
           <img alt="logo" className="thumbnailgit" src="/gwpaw2021/github.png"/><a href="https://github.com/inplco/gwpaw2021" target="_">github.com/inplco/gwpaw2021</a>
         </div>
         <div style={{ marginTop:-13 }}>
           <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
         </div>
       </div>
      </div>
    </div>
  )
}
