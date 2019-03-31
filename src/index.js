import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routes/>, document.getElementById('root'));

// Se for user serviceworker, troca por .register
serviceWorker.unregister();