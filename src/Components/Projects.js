import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
  render() {
    
    if(this.props.data) {
      var projects = this.props.data.projects.map(function(projects){
        return (
          <div key={projects.title} class="project-details">
            <figure>
              <img src={projects.image} alt="screenshot"/>
              <figcaption> {projects.title} </figcaption>
            </figure>
            <div className="bottom-links">
              <p>{projects.description}.</p>
              <span class="btn-git"> <a href={projects.giturl}> Github Repo </a> </span>
              <span class="btn-live"> <a href={projects.livelink}> Live Demo </a></span>
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
