import { LOGIN_SUCCESS, LOGOUT } from "./authTypes";

const initialState = {
  isAuth: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, user: action.payload };
    case LOGOUT:
      return { ...state, isAuth: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
