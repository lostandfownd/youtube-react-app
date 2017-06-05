import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize-css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
    <App />,
    document.getElementById('app-wrapper')
);



registerServiceWorker();
