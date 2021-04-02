import studentReducer from "../reducers/student"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
  studentReducer: studentReducer
})

export default rootReducer
