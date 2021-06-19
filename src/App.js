import React from "react";
import Amplify, {Auth} from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => (
  <AmplifyAuthenticator>
    <div>
      <h1> Welcome! You have successfully logged into the ORION WEB APPLICATION. </h1>
      <h5> This is a Web Application with AWS Cognito Authentication built on React + Amplify Framework</h5>
      <AmplifySignOut />
    </div>
  </AmplifyAuthenticator>
);

export default App;