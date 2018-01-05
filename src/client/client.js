import React from 'react';
import ReaactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Routes from './Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const app = document.getElementById('root');

ReaactDOM.hydrate(
  <Provider store={store} >
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  app
);
