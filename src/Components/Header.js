import React, { Component } from 'react'
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <nav id="">
        <div>
          <span>Divyesh</span>
        </div>
        <div>
        <ul>
          <li> <a className="smoothscroll" href="#home"> Home </a></li>
          <li> <a className="smoothscroll" href="#about">About</a></li>
          <li> <a className="smoothscroll" href="#projects">Projects</a> </li>
          <li> <a className="smoothscroll" href="#contact">Contact</a></li>
        </ul>
        </div>
      </nav>
    )
  }
}

export default Header;

