import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ACTIVITY } from "../actions/activity_actions";

const sessionReducer = (oldState = { currentUser: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { currentUser: action.user });
    default:
      return oldState;
  }
};

export default sessionReducer;
