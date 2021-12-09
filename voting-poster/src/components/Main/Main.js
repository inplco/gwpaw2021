import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';

const Main = () => (
  <div className="main-container">
    <h1 className="main-heading" style={{ marginTop: -175, fontFamily: 'Rajdhani' }}>GWPAW 2021<br></br>STUDENT POSTER AWARDS</h1>
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
      <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
    </div>
  </div>
);

export default Main;
