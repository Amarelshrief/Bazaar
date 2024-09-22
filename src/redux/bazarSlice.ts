import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../components/ProductData";

interface ProductData {
  _id: number;
  title: string;
  category: string;
  description: string;
  quantity: number;
  image: string;
  price: number;
}

export interface CounterState {
  productData: ProductData[];
  userInfo: null;
}

const initialState: CounterState = {
  productData: [],
  userInfo: null,
};

const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.productData.find(
        (product) => product._id === action.payload._id
      );

      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteCart: (state, action) => {
      state.productData = state.productData.filter(
        (product) => product._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      const product = state.productData.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.productData.find(
        (product) => product._id === action.payload._id
      );
      if (product!.quantity === 1) {
        product!.quantity = 1;
      } else {
        product!.quantity--;
      }
    },
    addUser: (state, actoin) => {
      state.userInfo = actoin.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteCart,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  addUser,
  deleteUser,
} = bazarSlice.actions;

export default bazarSlice.reducer;
