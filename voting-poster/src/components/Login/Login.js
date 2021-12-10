import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import '../../App.css';
import Modal from "react-modal";

Modal.setAppElement("#root");

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

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return(
    <div className="App" >
    <div className="main-container" style={{ marginTop: 0 }}>
      <br></br>
      <div className="app-logo">
      </div>
      <div className="login-wrapper" >
        <h1 style={{ marginTop: -30, fontFamily: 'Rajdhani' }}>GWPAW 2021</h1>
        <h2 style={{ marginTop: -40, fontFamily: 'Rajdhani' }}>VOTING PAGE</h2>
        <p style={{ marginTop: -30 }}>DEC 14-17 2021, HANNOVER</p>
        <h5 style={{ fontSize:24, marginTop: 10 }}>USE REGISTRATION TOKEN TO ACCESS THE VOTING PAGE</h5>
        <button className="button-help" onClick={toggleModal}>where is my registration token?</button>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel=""
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div style={{display:'flex'}}>
            <span style={{ fontSize:16, fontWeight:600, marginTop:10 }}>Your token is in an email with the subject "Your registration for the Gravitational Wave Physics and Astronomy Workshop 2021", sent by <span style={{ color:'blue' }}>gwpaw2021@aei.mpg.de</span> when you first registered on the GWPAW website. You can also request the code again <a style={{ color:'blue',fontSize:17, fontWeight:600 }} href="https://gwpaw2021.aei.mpg.de/access" target="_">here</a>.</span>
          </div>
          <div style={{ marginTop:10 }}>
            <button style={{ background:'black', color:'white', display:'flex', marginLeft:'85%' }} onClick={toggleModal}><span style={{ fontFamily:'Rajdhani', fontSize:16, fontWeight:600 }}>CLOSE</span></button>
          </div>
        </Modal>
        <p style={{ fontSize:16, fontWeight:600, marginTop: 10, color: 'yellow' }}>NOTE: If you have already voted, you won't be able to access the voting page. Shoo!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="password" onChange={e => setPassword(e.target.value)} style={{ fontSize: 20 }} />
          </label>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <button type="submit" className="button-outline"><span className="raj">LOG IN</span></button>
          </div>
          <br></br><br></br>
        </form>
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
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
