import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import '../../App.css';

async function loginUser(credentials) {
 return fetch('/login-auth', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      password
    });
    setToken(token);
  }
  return(
    <div className="App" >
    <div className="main-container" style={{ marginTop: 0 }}>
      <br></br>
      <div className="app-logo">
      </div>
      <div className="login-wrapper" >
        <h1 style={{ marginTop: -10, fontFamily: 'Rajdhani' }}>GWPAW 2021</h1>
        <h1 style={{ marginTop: -10, fontFamily: 'Rajdhani' }}>VOTING PAGE</h1>
        <p style={{ marginTop: -20 }}>DEC 13-17 2021, HANNOVER</p>
        <form onSubmit={handleSubmit}>
          <label>
            <h5 style={{ fontSize:24, marginTop: 10 }}>USE REGISTRATION TOKEN TO ACCESS THE VOTING PAGE</h5>
            <p style={{ fontSize:18, marginTop: -35, width:600, color: '#FFFFFF' }}>*You can find the token in your inbox sent during registration with the subject "Your registration for the Gravitational Wave Physics and Astronomy Workshop 2021". It looks like "4PSdUPWo", for example.</p>
            <p style={{ fontSize:16, marginTop: 10, color: 'yellow' }}>NOTE: If you have already voted, you won't be able to access the voting page. Shoo!</p>
            <input type="password" onChange={e => setPassword(e.target.value)} style={{ fontSize: 20 }} />
          </label>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <button type="submit" className="button-outline"><span className="raj">LOG IN</span></button>
          </div>
          <br></br><br></br>
        </form>
      </div>
      <div className="footer-login">
        <p style={{ fontSize: 15 }}>Powered by <a style={{ fontSize: 15 }} href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
      </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
