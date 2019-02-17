import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className ="project-component">
        <div class="image">
        <img src={this.props.projectPic} height="250" width="550"/>
        </div>
        <div class="overlay">
          <div class="text">{this.props.description}</div>
        </div>
      </div>
    )
  }
}

export default Project;
