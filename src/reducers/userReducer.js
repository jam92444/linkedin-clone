import { combineReducers } from 'redux';
// import { SET_USER, SIGN_OUT } from './actionType';

const initialState = {
  user: null,
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
            };
        case "SIGN_OUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
