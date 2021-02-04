import React, { Component } from 'react';
import './FixedHero.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from "react-router-dom";

export class FixedHero extends Component {
  render() {
    return (
      <div className="main_banner">
        <div className="banner-text">
          <h1>Hi There!</h1>
          <h1>I'm Divyesh Patel</h1>
          <h3>I'm a Full Stack Developer.</h3>
          <h5>I'm Passionate about building Web applications and solving complex business problems. </h5>
            <ul className="social_link">
              <li>
                <a href="https://github.com/Div685" className="" rel="noopener noreferrer" target="_blank">
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/div_685" rel="noopener noreferrer" target="_blank">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/divyesh-daxa-patel/" rel="noopener noreferrer" target="_blank">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default FixedHero;
