import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About-container" id="about">
      <style>
      @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab');
      </style>
        <div className="About-header">
          <p>student . designer . engineer</p>
        </div>
        <div className="About-main">
          <p className="Hi-im">hi, i'm</p>
          <div className="About-name">
            <p className="About-first">JULIA</p>
            <p className="About-last">WANG</p>
          </div>
          <div className="About-description">
              <p>I’m currently a first-year at University of California, Berkeley studying Electrical Engineering and Computer Sciences. Here are some things about me and what I’ve done.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
