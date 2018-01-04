import React from 'react';
import ReaactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const app = document.getElementById('root');

ReaactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  app
);
