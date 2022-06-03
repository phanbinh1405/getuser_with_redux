import { GET_USERS_SUCCESS } from "./actions";

const initialState = {
  users: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.user };
    default:
      return state;
  }
};

export default reducer;
