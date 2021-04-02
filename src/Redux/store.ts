import rootReducer from "./reducers"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const midderwares = [thunk]
const store = createStore(rootReducer, applyMiddleware(...midderwares))
export default store
