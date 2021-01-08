import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import todoReducer from './todo.reducer';

export default combineReducers({
    userReducer,
    todoReducer,
});