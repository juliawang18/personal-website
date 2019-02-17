import React, { Component } from 'react';
import './Experiences.css';
import Experience from '../../Components/Experiences/Experience';

class Experiences extends Component {
  render() {
    return (
      <div className="Experiences-container" id="experiences">
        <style>
        @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab');
        </style>
        <div class="experiences-line"></div>
        <div className ="experiences-header">
          <div className="experiences-title">
            <p>EXPERIENCES</p>
          </div>
          <div className="experiences-description" id="experiences">
            <p>These are some organizations I have been a part of recently.</p>
          </div>
        </div>
        <div className ="experiences-items">
          <Experience link = "https://codebase.berkeley.edu/" header="CodeBase" description=
          "I’m currently, part of the Mentored Project in a software development club. I will use full-stack web development in order to create a web application that will function as a judging portal for collegiate hackathons. " />
          <Experience link = "https://cs-kickstart.berkeley.edu/" header="CS Kickstart" description=
          "I am also part of a program called Computer Science Kickstart which aims to introduce incoming female students to computer science. My role is to debug and revamp the programs current website and eventually create a new website for sponsors and potential participants." />
          <Experience link = "http://www.ipmdinc.com/" header="Project ATMA" description=
          "I supported an artiﬁcial intelligence startup company through its preliminary phase of data collection, programming, and launching. I participated in the creation of an artiﬁcial intelligence platform by collecting around 600 input training data ﬁles and contributing to the project as part of the standard programming team. " />
          <Experience link = "https://www.niaid.nih.gov/" header="National Institutes of Health" description=
          "During the summer of 2017 I worked as a full-time paid biomedical research intern at the NIH in the Allergy and Infectious Diseases Institute. I researched the chemoattractant, G protein-coupled receptors, and their role in chemotaxis in eukaryotic cells. Some of the methods I used included flow cytometry and western blotting. " />
        </div>
      </div>

    );
  }
}

export default Experiences;
