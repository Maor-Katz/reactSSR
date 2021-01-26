export const FETCH_USERS = "fetch_users";
export const FETCH__CURRENT_USER = "fetch_current_user";
export const FETCH__ADMIN = "fetch_admins";

export const fetchUsers = () => async (dispatch, getState, api) => {

    const res = await api.get('/users');
    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {

    const res = await api.get('/current_user');
    dispatch({
        type: FETCH__CURRENT_USER,
        payload: res
    });
};
export const fetchAdmins = () => async (dispatch, getState, api) => {

    const res = await api.get('/admins');
    dispatch({
        type: FETCH__ADMIN,
        payload: res
    });
};
