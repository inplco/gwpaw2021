import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import axios from 'axios';

export default function Main() {
  const deleteCookie = async () => {
    try {
      console.log('logging out');
      await axios.get('/clear-cookie');
      console.log('logged out');
    } catch (e) {
      console.log(e);
    }
  };

  return (
  <div className="main-container">
    <div className="app-logo"></div>
    <h1 className="main-heading" style={{ marginTop: -135, fontFamily: 'Rajdhani' }}>GWPAW 2021</h1>
    <h2 style={{ marginTop: -55, fontFamily: 'Rajdhani' }}>STUDENT-POSTER AWARD</h2>
    <div className="main-btn-section">
      <p style={{ marginTop: -30 }}>DEC 14-17 2021, HANNOVER</p>
      <p style={{ fontWeight:600, marginTop: 25, marginLeft: 100, marginRight: 100, color: 'yellow' }}>You can view the posters <a className="blink" href="https://gwpaw2021.aei.mpg.de/access/posters/" target="_" style={{ color:'yellow', fontSize:20, fontWeight:600 }}>here</a>. Once you have decided on your favourite poster, continue to the voting page with its title handy. Note that you can only vote once [duh!] and your registration token will expire after you have cast your vote.</p>
      <Link to="/voting" className="show-stats-btn">
        CONTINUE TO VOTING
      </Link>
      <Link to="/session" className="show-stats-btn" style={{ background:'black', color:'white' }} onClick={deleteCookie}>
        I'LL VOTE LATER
      </Link>
    </div>
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
  )
};
