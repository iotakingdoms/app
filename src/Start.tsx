import React from 'react';
import logo from './logo.svg';

declare const window: Window & typeof globalThis & {
  env: any
};

export default function Start() {
  const authLink = 'http://auth.iotakingdoms.com/auth?response_type=code&client_id=ik-p-app&scope=openid&redirect_uri=http://app.iotakingdoms.com/cb';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Environment: {window.env.REACT_APP_ENVIRONMENT}</p>
        <p>
          iotakingdoms
        </p>
        <a
          className="App-link"
          href={authLink}
        >
          Login
        </a>
      </header>
    </div>
  );
}
