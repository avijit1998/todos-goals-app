import * as todoActions from "../actions/todos";
import * as goalActions from "../actions/goals";

const checker = (store) => (next) => (action) => {
  if (
    action.type === todoActions.ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea.");
  }

  if (
    action.type === goalActions.ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea.");
  }

  return next(action);
};

export default checker;
