import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import CoverageTotal from "../coverage/Total";
import TestTotal from "../test/Total";
import TotalNotFound from "./TotalNotFound";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
  },
  item: {
    padding: 16,
  },
});

const TOTALS_COMPONENTS = {
  // checkstyleErrors : TotalsCheckstyleErrors,
  coverage : CoverageTotal,
  test : TestTotal,
  unknown : TotalNotFound
}

class ModulesTotal extends Component {

  render() {
    const { classes } = this.props;
    const result = Object.keys(this.props.data).map((key) => {
      const TagName = TOTALS_COMPONENTS[key] || TOTALS_COMPONENTS["unknown"];
      const keyData = this.props.data[key];
      return (<Grid item key={key} xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.item}>
            <TagName name={key} data={keyData} />
          </Paper>
        </Grid>
      );
    });
    return (<Grid container spacing={8} className={classes.root}>{result}</Grid>);
  }
}

export default withStyles(styles, {withTheme: true})(ModulesTotal);
