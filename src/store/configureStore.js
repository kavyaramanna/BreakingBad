import { createStore, applyMiddleware, compose } from "redux";
import createRootReducer from "./rootReducer";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
// import { middleware as reduxPackMiddleware } from "redux-pack";
export const history = createBrowserHistory();

const initialState = {};

const middleWare = [routerMiddleware(history)];
const composedEnhancers = compose(applyMiddleware(...middleWare, thunk));

export default createStore(
  // createRootReducer(history),
  createRootReducer(history),
  initialState,
  composedEnhancers
);
