import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Report from './report/Report';
import data from './report.json'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Report data={data}/>, document.getElementById('root'));
registerServiceWorker();
