import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  total: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload;
    },
    getCart: (state, action) => {
      state.cart = action.payload;
    },
    addCart: (state, action) => {
      if (state.cart.every((item) => item.id !== action.payload.id)) {
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementCartItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity += 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementCartItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity >= 2) {
            item.quantity = item.quantity -= 1;
          } else item.quantity = 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    totalCart: (state) => {
      state.total = state.cart
        .reduce(
          (total, item) => (total = total + item.price * item.quantity),
          0
        )
        .toFixed(2);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProduct,
  addCart,
  getCart,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
  totalCart,
} = productSlice.actions;

export default productSlice.reducer;
