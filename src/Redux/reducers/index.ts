import studentReducer from '../reducers/student';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
	student: studentReducer
});

export default rootReducer;
