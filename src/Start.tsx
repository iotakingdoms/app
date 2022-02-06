import React from 'react';
import logo from './logo.svg';

declare const window: Window & typeof globalThis & {
  env: any
};

export default function Start() {
  const oidcIssuer = window.env.REACT_APP_OIDC_ISSUER;
  const oidcClientId = window.env.REACT_APP_OIDC_CLIENT_ID;
  const oidcRedirectUri = window.env.REACT_APP_OIDC_REDIRECT_URI;
  const authLink = `${oidcIssuer}/auth?response_type=code&client_id=${oidcClientId}&scope=openid&redirect_uri=${oidcRedirectUri}`;

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
