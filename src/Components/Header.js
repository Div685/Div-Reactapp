import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

  render() {
    return (
      <nav>
        <div>
          <span>Divyesh</span>
        </div>
        <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        </div>
      </nav>
    )
  }
}

export default Header;

