import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';

const Main = () => (
  <div className="main-container">
    <h1 className="main-heading" style={{ marginTop: -175, fontFamily: 'palatino' }}>GWPAW 2021 STUDENT POSTER AWARDS</h1>
    <div className="main-btn-section">
      <p style={{ marginTop: -30 }}>DEC 13-17 2021, HANNOVER</p>
      <p style={{ marginTop: 25, marginLeft: 100, marginRight: 100 }}>You'll need the poster number in order to select your choice. You can view the posters and find their associated numbers <a href="#" target = "_">here</a>. Once you have your poster number ready, continue to voting page.</p>
      <Link to="/voting" className="show-stats-btn">
        CONTINUE TO VOTING
      </Link>
      <Link to="/logout" className="show-stats-btn">
        LOG OUT
      </Link>
    </div>
    <div className="footer" style={{ position:'fixed' }}>
      <p>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
    </div>
  </div>
);

export default Main;
