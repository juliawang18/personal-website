import React, { Component } from 'react';
import githublogo from '../../Assets/githublogo.JPG';
import linkedin from '../../Assets/linkedin.JPG';
import instagram from '../../Assets/instagram.JPG';
import './Contact.css';



class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="contact">
        <style>
        @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab');
        </style>
        <p className="in-touch-header">LET'S GET IN TOUCH!</p>
        <div className="Contact-links">
          <a href="https://www.instagram.com/juliaxwang/"><img src={instagram} height="160" width="160"/></a>
          <a href="https://github.com/juliawang18"><img src={githublogo} height="170" width="170"/></a>
          <a href="https://www.linkedin.com/in/julia-wang-433218168/"><img src={linkedin} height="170" width="170"/></a>
        </div>
        <div id="rectangle-email"></div>
        <div className="Contact-email">
          <p>Or shoot me an email at juliawang821@berkeley.edu</p>
        </div>
      </div>
    );
  }
}

export default Contact;
