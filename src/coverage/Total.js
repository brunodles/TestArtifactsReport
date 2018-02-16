import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

class CoverageTotal extends Component {

  render() {
    const { classes } = this.props;
    const { theme } = this.props;
    return (
      <div>
        <h3>Coverage</h3>
        <p>Cover Rate: <b>{this.props.data.coveredRate}</b>%</p>
        <LinearProgress
          className={classes.progress}
          variant="determinate"
          size={100}
          thickness={2.0}
          value={this.props.data.coveredRate}
        />
      </div>
    );
  }
}

export default withStyles({})(CoverageTotal);
