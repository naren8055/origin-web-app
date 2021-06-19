import logo from './logo.svg';
import React, {Component} from 'react';
import FuncExample from './components/funcexample.js';
import ClassExample from './components/classexample.js';
import PropsExample from './components/propsexample.js';
import ChildrenProps from './components/childrenprops.js';
import StateExample from './components/stateexample.js';
import Counter from './components/counter.js';
import EventHandling from './components/eventHandling.js';
import EventBinding from './components/EventBinding.js';
import './App.css';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends Component {
  render () {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        A Web Application with AWS Cognito Authentication built on Amplify Framework
        </p>
        <FuncExample />
        <ClassExample />
        <PropsExample name="Naren"/>
        <ChildrenProps name="Alice"> <p> Children Props Example</p> </ChildrenProps>
        <StateExample />
        <Counter />
        <EventHandling />
        <EventBinding />
      </header>
    </div>);
  }
}

export default App;
