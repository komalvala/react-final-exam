import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { LOGIN_SUCCESS, LOGOUT } from "./authTypes";

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const logoutAction = () => ({ type: LOGOUT });

export const login = (email, password) => async (dispatch) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const register = (email, password) => async (dispatch) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => async (dispatch) => {
  await signOut(auth);
  dispatch(logoutAction());
};
