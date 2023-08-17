import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";
import productReducer from "./productSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    modal: modalReducer,
    cart: cartReducer,
  },
});

export default store;
