import React from "react";
import Amplify, {Auth} from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import logo from './logo.svg';
import './App.css';

Amplify.configure(awsconfig);

const App = () => (
  <AmplifyAuthenticator>
    <div>
    <AmplifySignOut />
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h2> Welcome! You have successfully logged into ORION. </h2>
      <p>This is a Web Application with AWS Cognito Authentication built on React + Amplify Framework</p>
    </header>
    </div>
  </AmplifyAuthenticator>
);

export default App;