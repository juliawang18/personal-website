import React, { Component } from 'react';

class Experiences extends Component {
  render() {
    return (
      <div className ="experience-container">
        <div className="experience-header">
          <a class="link" href={this.props.link}>{this.props.header}</a>
        </div>
        <div className="experience-description">
          <p>
            {this.props.description}
          </p>
        </div>
      </div>
    )
  }
}

export default Experiences;
