import React, { Component } from 'react';
import art from '../../Assets/art.JPG';
import puzzles from '../../Assets/puzzles.JPG';
import swim from '../../Assets/swim.JPG';
import './Interests.css';
import InterestBox from '../../Components/Interests/InterestBox';

class Interests extends Component {
  render() {
    return (
      <div className="Interests-container" id="interests">
        <style>
        @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab');
        </style>
        <div className ="Interests-header">
          <p>
            Here are some of my interests and hobbies.
          </p>
          <div id="rectangle-first-line"></div>
          <div id="rectangle-second-line"></div>
        </div>
        <div className ="Interests-main">
          <InterestBox description="ART" interestPic={art} />
          <InterestBox description="DOGS" interestPic={puzzles} />
          <InterestBox description="SWIMMING" interestPic={swim} />
          <div id="rectangle-pics"></div>
        </div>
      </div>
    );
  }
}

export default Interests;
