import { combineReducers } from "redux";
import { userReducer } from "react";

let rootReducer = combineReducers({
  todo: userReducer,
});

export default rootReducer;
