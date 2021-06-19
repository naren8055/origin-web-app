import React from "react";
import Amplify, {Auth} from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => (
  <AmplifyAuthenticator>
    <div>
      <h1> Congratulations! You have successfully logged in. </h1>
      <AmplifySignOut />
    </div>
  </AmplifyAuthenticator>
);

export default App;