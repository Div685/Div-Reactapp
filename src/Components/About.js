import React, { Component } from 'react';
import './About.css';

class About extends Component { 
  render() {
    return (
      <div className="main-about" id ="about">
        <h2>Skills</h2>
        <div className="hard-skill">
          <span className="iconify" data-icon="vscode-icons:file-type-html" title="HTML" data-inline="false"></span>
          <span className="iconify" data-icon="vscode-icons:file-type-css" title="CSS" data-inline="false"></span>
          <span className="iconify" data-icon="logos:bootstrap" title="Bootstrap" data-inline="false"></span>
          <span className="iconify" data-icon="logos:javascript" title="JavaScript" data-inline="false"></span>
          <span className="iconify" data-icon="logos:ruby" title="Ruby" data-inline="false"></span>
          <span className="iconify" data-icon="mdi:language-ruby-on-rails" title="Ruby on Rails" data-inline="false"></span>
          <span className="iconify" data-icon="logos:react" title="React" data-inline="false"></span>
          <span className="iconify" data-icon="logos:python" title="Python" data-inline="false"></span>
          <span className="iconify" data-icon="logos:flutter" title="Flutter" data-inline="false"></span>
          <span className="iconify" data-icon="logos:github-icon" title="GitHub" data-inline="false"></span>
          <span className="iconify" data-icon="logos:git" title="Git" data-inline="false"></span>
          <span class="iconify" data-icon="logos:mongodb" title="MongoDB" data-inline="false"></span>
          <span class="iconify" data-icon="vscode-icons:file-type-sql" title="SQL" data-inline="false"></span>
          <span class="iconify" data-icon="logos:postgresql" title="PostgreSql" data-inline="false"></span>
          <span class="iconify" data-icon="flat-color-icons:linux" data-inline="false"></span>

        </div>
      </div>  
    )
  }
}

export default About
