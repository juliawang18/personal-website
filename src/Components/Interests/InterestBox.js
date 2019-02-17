import React, { Component } from 'react';

class InterestBox extends Component {
  render() {
    return (
      <div className ="Interests-pics">
        <div className ="Interests-pic">
          <img src={this.props.interestPic} height="180" width="400"/>
        </div>
        <svg height="5">
        </svg>
      </div>
    )
  }
}

export default InterestBox;
