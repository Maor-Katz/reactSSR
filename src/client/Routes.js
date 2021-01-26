import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import { loadData } from './pages/UsersList';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: "/",
                exact: true
            },
            {
                ...UsersList,
                path: "/users"

            },
            {
                ...AdminsListPage,
                path: "/admins"

            },
            {
                ...NotFoundPage
            }
        ]
    }
];
