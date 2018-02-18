import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import yellow from 'material-ui/colors/yellow';
import red from 'material-ui/colors/red';
import deepOrange from 'material-ui/colors/deepOrange'
import { Chart } from 'react-google-charts';

class TestTotal extends Component {

  render() {
    const { classes } = this.props;
    const testData = this.props.data;
    return (
      <div>
        <h3>Test</h3>
        <p>Success Rate: <b>{testData.successRate}</b>%</p>
        <Chart
          chartType="PieChart"
          data={[
            ['title', 'value'],
            ['Success', testData.success],
            ['Skipped', testData.skipped],
            ['Failures', testData.failures],
            ['Errors', testData.errors]
          ]}
          options={{
            pieHole: 0.4,
            slices: [
              { color: green[400] },
              { color: yellow[400] },
              { color: red[400] },
              { color: deepOrange[400] }
            ],
            chartArea: {width: '100%', height: '80%'},
            legend: {position: 'bottom'}
          }}
          width="100%"
          graph_id="PieChart"
          legend_toggle
        />
      </div>
    );
  }
}

export default withStyles({})(TestTotal);
