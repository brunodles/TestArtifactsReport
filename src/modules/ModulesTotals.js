import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import { LinearProgress } from 'material-ui/Progress';
import { Chart } from 'react-google-charts';
import CoverageTotal from "../coverage/Total"

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
    const { theme } = this.props;
    const result = Object.keys(this.props.data).map((key) => {
      if (key === "coverage") {
        const coverageData = this.props.data[key];
        return (<Grid item key={key}>
            <Paper className={classes.item}>
              <CoverageTotal data={coverageData} />

              <Chart
                chartType="PieChart"
                data={[['title', 'value'], ['Covered', coverageData.covered], ['Missed', coverageData.missed]]}
                options={{
                  pieHole: 0.4,
                  slices: [
                    { color: theme.palette.primary.main },
                    { color: theme.palette.secondary.main }
                  ]
                }}
                width="100%"
                graph_id="PieChart"
                legend_toggle
              />
              <br/>{JSON.stringify(coverageData)}
            </Paper>
          </Grid>);
        } else {
          return (<Grid item key={key}>
            <Paper className={classes.item}>
              <h3>{key}</h3>
              {JSON.stringify(this.props.data[key])}
            </Paper>
          </Grid>);
        }
      });
    return (<Grid container spacing={8} className={classes.root}>{result}</Grid>);
  }
}

export default withStyles(styles, {withTheme: true})(ModulesTotal);
