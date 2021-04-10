import React, { Component } from 'react';
import './FixedHero.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export class FixedHero extends Component {
  render() {

    if(this.props.data) {
        var name = this.props.data.name;
        var occupation = this.props.data.occupation;
        var description = this.props.data.description;
        var pdf = this.props.data.resumepdf; 
        var gitHub = this.props.data.socialLink.gitHub;
        var twitter = this.props.data.socialLink.twitter;
        var linkedIn = this.props.data.socialLink.linkedIn;
    }

    return (
      <div className="main_banner">
        <div className="banner-text">
          <h1>Hi There!</h1>
          <h1>I'm {name}</h1>
          <h3>I'm a {occupation}.</h3>
          <h5> {description}. </h5>
            <ul className="social_link">
              <li>
                <a href={gitHub} className="" rel="noopener noreferrer" target="_blank">
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a href={twitter} rel="noopener noreferrer" target="_blank">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href={linkedIn} rel="noopener noreferrer" target="_blank">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
            <span className="btn-git-cv">
              <a href={pdf} rel="noopener noreferrer" target="_blank" download="DivResume">Download My CV</a>
            </span>
        </div>
      </div>
    )
  }
}

export default FixedHero;
