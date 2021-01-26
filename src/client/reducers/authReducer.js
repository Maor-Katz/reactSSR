import { FETCH__CURRENT_USER } from '../actions';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH__CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;

    }
};