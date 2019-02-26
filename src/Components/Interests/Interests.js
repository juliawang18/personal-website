import React, { Component } from 'react';
import art from '../../Assets/art.JPG';
import music from '../../Assets/music.JPG';
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
          <InterestBox link="https://juliawangart.weebly.com/" interestPic={art} />
          <InterestBox link="https://open.spotify.com/user/juliawang821" interestPic={music} />
          <InterestBox link="https://www.collegeswimming.com/swimmer/389330/" interestPic={swim} />
          <div id="rectangle-pics"></div>
        </div>
      </div>
    );
  }
}

export default Interests;
