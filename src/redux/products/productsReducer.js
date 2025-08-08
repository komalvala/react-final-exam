import { FETCH_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, SET_LOADING } from "./productsTypes";

const initialState = {
  products: [],
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((p) => (p.id === action.payload.id ? action.payload : p)),
      };
    case DELETE_PRODUCT:
      return { ...state, products: state.products.filter((p) => p.id !== action.payload) };
    default:
      return state;
  }
};

export default productsReducer;
