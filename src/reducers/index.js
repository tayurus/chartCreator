import { combineReducers } from "redux";

import { alert } from "./alert.reducer.js";
import { pointsReducer } from "./points.reducer.js";

const rootReducer = combineReducers({
  alert,
  pointsReducer
});

export default rootReducer;
