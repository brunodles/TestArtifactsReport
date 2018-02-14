import React, { Component } from 'react';

import Title from './Title.js'
import Modules from './Modules.js'

import Button from 'material-ui/Button';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';

const theme = createMuiTheme({
 palette: {
   primary: {
     light: '#98ee99',
     main: '#66bb6a',
     dark: '#338a3e',
     contrastText: '#000000',
   },
   secondary: {
     light: '#fff64f',
     main: '#ffc400',
     dark: '#c79400',
     contrastText: '#000',
   },
 },
});

const styles = theme => ({
  content: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
  }
});

class Report extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Title name={findTitle(this.props)}/>
        <div className={this.props.classes.content}>
          <Modules data={this.props.data} />
        </div>
      </MuiThemeProvider>
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

export default withStyles(styles)(Report);
