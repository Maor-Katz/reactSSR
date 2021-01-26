import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';
import Header from './components/Header';

function App({ route }) {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
}

export default {
    component: App,
    loadData: ({ dispatch }) => {
        return dispatch(fetchCurrentUser());
    }
};