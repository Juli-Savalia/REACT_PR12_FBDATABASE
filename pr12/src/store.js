import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers";
import { thunk } from "redux-thunk";

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
