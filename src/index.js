import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import App from './components/App';

import './assets/css/foundation.css';
import './assets/css/index.css';


const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  target
);
