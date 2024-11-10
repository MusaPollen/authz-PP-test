import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-clkrligodugy76hh.us.auth0.com"
    clientId="ibJydlYXpEkhmOCMoPr9cO8gw7p7zFmR" //
    authorizationParams={{
      redirect_uri: window.location.origin
      // audience: "https://dev-clkrligodugy76hh.us.auth0.com/api/v2/",
      // scope: "read:users update:users create:users read:users_app_metadata update:users_app_metadata create:users_app_metadata"
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
