import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './topBar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RateMovie from './rateMovie'
import ShowUsers from './showUsers'
ReactDOM.render(
  <React.StrictMode>
    <TopBar />
  </React.StrictMode>,
  document.getElementById('root')
);

