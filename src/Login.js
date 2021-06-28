import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login_logo'>
        <img
          src='https://www.nicepng.com/png/full/19-191230_discord-blue-text-font-logo-discord-logo-svg.png'
          alt=''
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
