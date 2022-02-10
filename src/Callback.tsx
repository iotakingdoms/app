import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import logo from './logo.svg';

declare const window: Window & typeof globalThis & {
  env: any
};

export default function Callback() {
  const [accessToken, setAccessToken] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get('code');
  const oidcIssuer = window.env.REACT_APP_OIDC_ISSUER;
  const oidcClientId = window.env.REACT_APP_OIDC_CLIENT_ID;
  const oidcClientSecret = window.env.REACT_APP_OIDC_CLIENT_SECRET; // Remove this completely...
  const oidcRedirectUri = window.env.REACT_APP_OIDC_REDIRECT_URI;
  const body = {
    grant_type: 'authorization_code',
    client_id: 'ik-d-app',
    client_secret: 'wc8PD4YKHLr9ayg2F4ce3M33', // Remove this completely, this should not be available to the browser...
    code,
    redirect_uri: 'http://localhost:3000/cb',
  };

  useEffect(() => {
    // This command can get the access token...
    // curl --data "grant_type=authorization_code&client_id=ik-d-app&client_secret=wc8PD4YKHLr9ayg2F4ce3M33&code=4O7ccdhA2OJ5siglTLkSIObOXcZGyRUwU--mzHf_7U4&redirect_uri=http://localhost:3000/cb" -vvv http://auth.development.iotakingdoms.com/token

    // Trying to do the same as above, but got blocked by cors... Is a backend api needed?
    (async () => {
      const sendData = `grant_type=authorization_code&client_id=${oidcClientId}&client_secret=${oidcClientSecret}&code=${code}&redirect_uri=${oidcRedirectUri}`;
      const response = await fetch('http://auth.development.iotakingdoms.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: sendData,
      });

      const data = await response.json();
      setAccessToken(data.access_token);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Environment: {window.env.REACT_APP_ENVIRONMENT}</p>
        <p>
          iotakingdoms
        </p>
        <p>
          Logged in!
        </p>
        <p>
          Access token: {accessToken}
        </p>
      </header>
    </div>
  );
}
