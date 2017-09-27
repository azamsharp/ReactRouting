//############ base-layout.js ##############
import React, { Component } from 'react';
import NavBar from './navBar'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        {this.props.children}
        <footer>
          <h5>Murray Rocks</h5>
        </footer>
      </div>

    )
  }
}
