import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import ReportLoader from './report/Loader';

const theme = createMuiTheme({
 palette: {
   primary: {
     light: '#98ee99',
     main: '#66bb6a',
     dark: '#338a3e',
     contrastText: '#fff',
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
    <ReportLoader url="https://test-artifacts.firebaseio.com/testartifacts/last.json"/>
  </MuiThemeProvider>
);

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
