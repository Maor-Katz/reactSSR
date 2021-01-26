import { combineReducers } from 'redux';
import adminsReducers from './adminsReducers';
import authReducer from './authReducer';
import usersReducers from './usersReducer';

export default combineReducers({
    users: usersReducers,
    auth: authReducer,
    admins: adminsReducers
});