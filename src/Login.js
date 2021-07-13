import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { auth, provider } from './firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  const localSignIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      let user = userCredential.user
      console.log(user)
    })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div className='login'>
      <div className='login_logo'>
        <img
          src='https://www.nicepng.com/png/full/19-191230_discord-blue-text-font-logo-discord-logo-svg.png'
          alt=''
        />
      </div>

      <div className='login_userAndEmail'>
        <Button onClick={signIn}>Login with Google</Button>
        <p>OR</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
        <Button onClick={localSignIn}>Login</Button>
        <div className='login_description'>
          <h6>If you don't feel comfortable using your Google account to login, you can use the local account below.</h6>
          <div>Username: test@gmail.com</div>
          <div>Password: welcome1</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
