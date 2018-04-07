import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  render() {
    return (
      <div>
      <button>{this.props.isi}</button>
      </div>
    );
  }
}

export default Button;
