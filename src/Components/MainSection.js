import React, { Component } from 'react';
import $ from 'jquery';
import FixedHero from './FixedHero';
import './MainSection.css';
import ImageBanner from '../images/bg-hero.png';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

class MainSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }


  render() {
    return (
      <div className="main_section" id="home">
        
          <div className="left_fixed">
            <FixedHero data={this.state.resumeData.main} />
          </div>
          <div className="right_scrollable">
            <div className="right_image">
              <img src={ImageBanner} alt="img"/>
            </div>
              <About />
              <Projects data={this.state.resumeData.portfolio} />
              <Contact />      
          </div>
      </div>
    )
  }
}

export default MainSection
