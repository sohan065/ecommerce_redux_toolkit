import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/product/cartSlice";
import productSlice from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
