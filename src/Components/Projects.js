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
              <p>{projects.description}</p>
              <span className="btn-git"> <a href={projects.giturl} rel="noopener noreferrer" target="_blank"> Github Repo </a> </span>
              <span className="btn-live"> <a href={projects.livelink} rel="noopener noreferrer" target="_blank"> Live Demo </a></span>
            </div>
          </div>
        )
      });

      var other_projects = this.props.data.other_projects.map(function(other_projects){
        return(
          <div key={other_projects.title} className="other-project-details">
            <figure>
              <img className="img-pro" src={other_projects.image} alt="screenshot"/>
              <figcaption> {other_projects.title} </figcaption>
            </figure>
            <div className="bottom-links">
              <p>{other_projects.description}</p>
              <div className="btn-otherproject">
               <a className="link-a" href={other_projects.giturl} rel="noopener noreferrer" target="_blank"> <span className="btn-git-full"> Github Repo </span> </a>
               <a className="link-a" href={other_projects.livelink} rel="noopener noreferrer" target="_blank" > <span className="btn-live-full"> Live Demo </span> </a>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <div>
        <section className="main-projects" id="projects">
          <h2 className="project-title">Projects</h2>
          <div className="project-image">
            {projects}
          </div>
        </section>

        <section className="main-projects">
          <h2 className="project-title">Other Projects</h2>
          <div className="other-projects">
            {other_projects}
          </div>
        </section>
      </div>
    )
  }
}

export default Projects
