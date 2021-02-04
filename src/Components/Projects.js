import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
  render() {
    
    if(this.props.data) {
      var projects = this.props.data.projects.map(function(projects){
        return (
          <div key={projects.title}>
          <figure>
            <img src={projects.image} alt="screenshot"/>
            <figcaption> {projects.title} </figcaption>
          </figure>
          <div className="bottom-links">
            <p> this is: {projects.title} </p>
            <p>!PeTsLifestyLE The website is about reading and writing an article 
              about pets. Users can also vote and comment on an 
              article but to do that users need to signup and login.</p>
            <span>Github Repo</span>
            <span>Live Demo</span>
          </div>
          </div>
        )
      })
    }

    return (
      <section className="main-projects">
        <h2>Projects</h2>
        <div className="project-image">
          {projects}
        </div>

      </section>
    )
  }
}

export default Projects
