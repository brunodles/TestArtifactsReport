import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Report from './report/Report';
import data from './report.json'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';

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

const main = (
  <MuiThemeProvider theme={theme}>
    <Report data={data}/>
  </MuiThemeProvider>
);

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
