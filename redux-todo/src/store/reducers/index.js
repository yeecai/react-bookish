import { combineReducers } from "redux";
import todos from "./todos";
import getTodosFilter from "./showTodos";

export default combineReducers({
  todos,
  getTodosFilter,
});
