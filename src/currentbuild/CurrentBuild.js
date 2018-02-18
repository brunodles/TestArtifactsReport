import React, { Component } from 'react';
import Modules from '../modules/Modules.js'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  content: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
  }
});

class CurrentBuild extends Component {
  render() {
    return (
      <div>
        <div className={this.props.classes.content}>
          <Modules data={this.props.data} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CurrentBuild);
