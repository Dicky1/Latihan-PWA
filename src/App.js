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
    apiKey: "AIzaSyAuv9qfQrLVUc7C8wfb3QYWgp_rxLsCNWE",
    authDomain: "latihan-pwa-4b427.firebaseapp.com",
    databaseURL: "https://latihan-pwa-4b427.firebaseio.com",
    projectId: "latihan-pwa-4b427",
    storageBucket: "latihan-pwa-4b427.appspot.com",
    messagingSenderId: "553076283499"
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
