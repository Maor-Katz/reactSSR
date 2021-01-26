import React, { useEffect } from 'react';
import { fetchUsers } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

function UsersList() {
    const usersStore = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(usersStore);
        dispatch(fetchUsers());

    }, []);

    const renderUsers = () => {
        return usersStore.users.map(u => {
            return <li key={u.id}>{u.name}</li>;
        });
    };
    const head = () => {
        return (<Helmet>
            <title>{usersStore.users.length.toString()} Users App</title>
            <meta property="og:title" content="Users App" />
        </Helmet>);
    };
    return (
        <div>
            {head()}
            Here is List of Users
            <div>
                <ul>{renderUsers()}</ul>
            </div>
        </div>
    );
}

const loadData = (store) => {
    // console.log(store);
    return store.dispatch(fetchUsers());
};

export default {
    component: UsersList,
    loadData
};