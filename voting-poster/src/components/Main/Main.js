import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';

const Main = () => (
  <div className="main-container">
    <h1 className="main-heading" style={{ marginTop: -125, fontFamily: 'Rajdhani' }}>GWPAW 2021</h1>
    <h2 style={{ marginTop: -55, fontFamily: 'Rajdhani' }}>STUDENT POSTER AWARDS</h2>
    <div className="main-btn-section">
      <p style={{ marginTop: -30 }}>DEC 13-17 2021, HANNOVER</p>
      <p style={{ marginTop: 25, marginLeft: 100, marginRight: 100, color: 'yellow' }}>You can view the posters <span style={{ fontWeight:600 }}>here</span>. Once you have decided on your favourite poster, continue to voting page with its title. Note that you can only vote once [duh!] and your registration token will expire [!!!] after you have cast your vote.</p>
      <Link to="/voting" className="show-stats-btn">
        CONTINUE TO VOTING
      </Link>
      <Link to="/logout" className="show-stats-btn" style={{ background:'black', color:'white' }}>
        I'LL VOTE LATER
      </Link>
    </div>
    <div className="footer" style={{ position:'fixed' }}>
      <div>
        <img className="thumbnailgit" src="/gwpaw2021/github.png"/><a href="https://github.com/inplco/gwpaw2021" target="_">github.com/inplco/gwpaw2021</a>
      </div>
      <div style={{ marginTop:-13 }}>
        <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
      </div>
    </div>
  </div>
);

export default Main;
