import { combineReducers } from "redux";
import homeReducer from "./feature/home/redux";
import formReducer from "./feature/form/redux";

const rootReducer = combineReducers({
  home: homeReducer,
  form: formReducer
});

export default rootReducer;
