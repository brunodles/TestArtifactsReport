import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
  },
  item: {
    padding: 16,
  },
});

class ModulesTotal extends Component {

  render() {
    const { classes } = this.props;
    const result = Object.keys(this.props.data).map((key) => {
      return (<Grid item key={key}>
          <Paper className={classes.item}>
            {key} - {JSON.stringify(this.props.data[key])}
          </Paper>
        </Grid>);
      });
    return (<Grid container spacing={8} className={classes.root}>{result}</Grid>);
  }
}

export default withStyles(styles)(ModulesTotal);
