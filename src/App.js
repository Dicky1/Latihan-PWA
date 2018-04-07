import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Switch,
  Link
}from 'react-router-dom';

import firebase from 'firebase';
import About from './About';
import AppShell from './AppShell';
import Content from './Content';
import Contact from './Contact';



  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

    export class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <AppShell/>
          <Switch>
            <Route exact path='/' component={Content}/>
            <Route path='/About' component={About}/>
            <Route path='/Contact' component={Contact}/>
          </Switch>
        </div>
      </Router>
      </div>
      );
    }
  }

export default App;
