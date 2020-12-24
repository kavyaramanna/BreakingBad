import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import mainReducer from "../reducers/mainReducer";
import errorReducer from "../reducers/errorReducer"
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    mainReducer,
    errorReducer
  });
