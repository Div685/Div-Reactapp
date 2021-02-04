import React, { Component } from 'react';
import $ from 'jquery';
import FixedHero from './FixedHero';
import './MainSection.css';
import ImageBanner from '../images/bg-hero.png';
import Projects from './Projects';


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
      <div className="main_section">
        <div className="left_fixed">
          <FixedHero data={this.state.resumeData.main} />
        </div>
        <div className="right_scrollable">
          <div className="right_image">
            <img src={ImageBanner} alt="img"/>
          </div>
          <div className="porject-section">
            <Projects data={this.state.resumeData.portfolio} />
          </div>
        </div>
      </div>
    )
  }
}

export default MainSection
