import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {

  render() {
    return (
    <div>
    <div className="nav-bar">
      <button><Link to="/">Home</Link></button>
      <button><Link to="/page_one">Page One</Link></button>
      <button><Link to="/page_two">Page Two</Link></button>
    </div>
    {this.props.children}
    </div>
    )
  }

}
