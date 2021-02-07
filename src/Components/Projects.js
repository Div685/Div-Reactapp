import React, { Component } from 'react';
import './Projects.css';


class Projects extends Component {
  render() {
    
    if(this.props.data) {
      var projects = this.props.data.projects.map(function(projects){
        return (
          <div key={projects.title} className="project-details">
            <figure>
              <img src={projects.image} alt="screenshot"/>
              <figcaption> {projects.title} </figcaption>
            </figure>
            <div className="bottom-links">
              <p>{projects.description}.</p>
              <span className="btn-git"> <a href={projects.giturl}> Github Repo </a> </span>
              <span className="btn-live"> <a href={projects.livelink}> Live Demo </a></span>
            </div>
          </div>
        )
      })
    }

    return (
      <section className="main-projects" id="projects">
        <h2 className="project-title">Projects</h2>
        <div className="project-image">
          {projects}
        </div>

      </section>
    )
  }
}

export default Projects
