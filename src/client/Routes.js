import React from 'react';

import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AdminsListPage,
        path: '/admins',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];


