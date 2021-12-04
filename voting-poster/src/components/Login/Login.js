import React from 'react';
import './login.css';
import '../../App.css';

export default function Login() {
  return(
    <div className="App" >
      <br></br>
      <div className="app-logo">
      </div>
      <div className="login-wrapper" >
        <h1 style={{ marginTop: -10, fontFamily: 'palatino' }}>GWPAW 2021 AWARDS</h1>
        <p style={{ marginTop: -30 }}>DEC 13-17 2021, HANNOVER</p>
        <p style={{ marginTop: 25, marginLeft: 100, marginRight: 100 }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
        <form>
          <label>
            <h5 style={{ marginTop: 1 }}>USE REGISTRATION TOKEN</h5>
            <p style={{ marginTop: -35 }}>[e.g. 4PSdUPWo]</p>
            <input type="password" style={{ fontSize: 20 }} />
          </label>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <button type="submit" className="button-outline"><span className="raj">LOG IN</span></button>
          </div>
          <br></br><br></br>
        </form>
      </div>
      <div className="footer-login">
        <p style={{ fontSize: 14 }}>Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
      </div>
    </div>
  )
}
