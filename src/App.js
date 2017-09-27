import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseLayout from './components/baseLayout'
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <div>
      <div>

      </div>

      <div>
        {this.props.children}
      </div>

      </div>

    );
  }
}

export default App;
