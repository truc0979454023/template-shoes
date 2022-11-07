import { configureStore } from "@reduxjs/toolkit";
import productSlide from "./features/productSlide";

export const store = configureStore({
  reducer: {
    data: productSlide,
  },
});
