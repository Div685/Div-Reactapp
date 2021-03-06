import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "0";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }

  render() {
    return (
      <nav id="main">
        <div className="logo">
          <span> <a href="#"> Divyesh </a></span>
        </div>
        <div className="rightside_nav">
        <ul>
          <li> <a className="smoothscroll" href="#home"> Home </a></li>
          <li> <a className="smoothscroll" href="#about">Skills</a></li>
          <li> <a className="smoothscroll" href="#projects">Projects</a> </li>
          <li> <a className="smoothscroll" href="#contact">Contact</a></li>
        </ul>
        <span className="menu-icon d-md-none" onClick={() => this.openNav()}>&#9776;</span>
        </div>

        {/* // <!-- nav mobile Screen--> */}
        <div className="sidenav d-md-none d-lg-none d-flex flex-column" id="mySidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
          <ul>
          <li> <a className="smoothscroll" href="#home"> Home </a></li>
          <li> <a className="smoothscroll" href="#about">Skills</a></li>
          <li> <a className="smoothscroll" href="#projects">Projects</a> </li>
          <li> <a className="smoothscroll" href="#contact">Contact</a></li>
        </ul>
        </div>
      </nav>

       
    )
  }
}

export default Header;

