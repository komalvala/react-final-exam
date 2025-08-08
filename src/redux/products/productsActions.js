import { db } from "../../firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy
} from "firebase/firestore";
import { FETCH_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, SET_LOADING } from "./productsTypes";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const q = query(collection(db, "products"), orderBy("title", "asc"));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    dispatch({ type: FETCH_PRODUCTS, payload: products });
  } catch (err) {
    console.error("fetchProducts:", err);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const ref = await addDoc(collection(db, "products"), product);
    dispatch({ type: ADD_PRODUCT, payload: { id: ref.id, ...product } });
  } catch (err) {
    console.error("addProduct:", err);
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    await updateDoc(doc(db, "products", id), product);
    dispatch({ type: UPDATE_PRODUCT, payload: { id, ...product } });
  } catch (err) {
    console.error("updateProduct:", err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "products", id));
    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (err) {
    console.error("deleteProduct:", err);
  }
};
