import React, { Component } from 'react';
import './Projects.css'

export class Projects extends Component {
  render() {
    return (
      <section className="main-projects">
        <h2>Projects</h2>
        <div className="project-image">
          <figure>
            <img src="https://github.com/Div685/ror-lifestyle-app/raw/development/screencapture.png" alt="screenshot"/>
            <figcaption>!PetsLiFestyLE</figcaption>
          </figure>
          <div className="bottom-links">
            <p>!PeTsLifestyLE The website is about reading and writing an article 
              about pets. Users can also vote and comment on an 
              article but to do that users need to signup and login.</p>
            <span>Github Repo</span>
            <span>Live Demo</span>
          </div>
        </div>

      </section>
    )
  }
}

export default Projects
