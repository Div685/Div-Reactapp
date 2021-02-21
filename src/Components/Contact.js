import React, { Component } from 'react';
import './Contact.css';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Contact extends Component {
  render() {
    return (
      <div className="main-contact" id="contact">
        <div className="left-contact">
          <h2>Let's work together!</h2>
          <p>Have a project you'd like to discuss? Feel free to connect with me through my social media or send me an email.</p>
          <span> <EmailIcon className="email"/> divyeshpatel685@gmail.com</span>
        </div>
        <div className="list-socialapp">
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

export default Contact
