import { FETCH__ADMIN } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH__ADMIN:
            return action.payload.data;
        default:
            return state;

    }
};