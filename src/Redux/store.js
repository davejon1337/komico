import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, logger];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
