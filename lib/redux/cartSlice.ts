// lib/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string; 
};

type CartState = {
  cartProducts: CartProduct[];
};

const initialState: CartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingItem = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartProducts.push({
          ...action.payload,
          id: action.payload.id,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
