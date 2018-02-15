import React, { Component } from 'react';

class TotalNotFound extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Report type not found!</p>
      </div>
    );
  }
}

export default TotalNotFound;
