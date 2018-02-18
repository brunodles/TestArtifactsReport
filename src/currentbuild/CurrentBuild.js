import React, { Component } from 'react';

import Title from './Title.js'
import Modules from '../modules/Modules.js'

import Button from 'material-ui/Button';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';

const styles = theme => ({
  content: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
  }
});

class CurrentBuild extends Component {

    // <Title name={findTitle(this.props)}/>
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

function findTitle(props) {
  try {
    return props.data.testartifacts.buildInfo.projectName;
  } catch(error){
    return "Unknown";
  }
}

export default withStyles(styles)(CurrentBuild);
