import 'babel-polyfill';
import React from 'react';
import ReaactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import reducers from './reducers';
import Routes from './Routes';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

const app = document.getElementById('root');

ReaactDOM.hydrate(
  <Provider store={store} >
    <BrowserRouter>
      <div>{ renderRoutes(Routes) }</div>
    </BrowserRouter>
  </Provider>,
  app
);
