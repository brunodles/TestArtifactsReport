import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import ModulesTotals from './ModulesTotals.js'

class Modules extends Component {

  render() {
    const result = Object.keys(this.props.data).map((key) => {
      return <Module key={key} name={key} data={this.props.data[key]} />;
    });
    return (<div>{result}</div>);
  }
}

export class Module extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totals: props.data.totals
    };
  }

  render() {
    return (<div>
      <h2>{this.props.name}</h2>
      <ModulesTotals data={this.state.totals} />
      </div>);
  }
}

export default Modules;
