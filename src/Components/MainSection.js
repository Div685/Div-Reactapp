import React, { Component } from 'react';
import FixedHero from './FixedHero';
import './MainSection.css';
import ImageBanner from '../images/bg-hero.png';

export class MainSection extends Component {
  render() {
    return (
      <div className="main_section">
        <div className="left_fixed">
          <FixedHero />
        </div>
        <div className="right_scrollable">
          <div className="right_image">
            <img src={ImageBanner} alt="img"/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainSection
