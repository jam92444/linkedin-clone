import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Make sure this path is correct


const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
