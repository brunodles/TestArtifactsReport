import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Title extends Component {

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {this.props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Title;
