import React, { Component } from 'react';
import insertionsort from '../../Assets/insertionsort.JPG';
import Project from '../../Components/Projects/Project.js';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects-container" id="projects">
        <style>
        @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab');
        </style>
        <div class="projects-line"></div>
        <div className ="project-title">
          <p>
            PROJECTS
          </p>
        </div>
        <div className ="project-header">
          <p>
            Here's a couple projects I've worked on recently. Check out my Github if you would like to see more.
          </p>
        </div>
        <Project description="I developed a JavaScript program that visually demonstrates insertion sort." projectPic={insertionsort} />
      </div>
    );
  }
}

export default Projects;
