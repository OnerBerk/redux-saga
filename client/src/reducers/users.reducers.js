import {Types} from "../actions/users.actions";

const INITIAL_STATE = {
    items: []
}
export default function usersReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USERS_SUCCESS: {
            return {
                item: action.payload.items
            }
        }
        default: {
            return state;
        }
    }
}