import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
  },
  reducers: {
    addToBasket: (state, action) => {
      const product = { ...action.payload };
      const index = state.products.findIndex((p) => p.id === product.id);

      if (index === -1) {
        state.products.push(product);
      } else {
        state.products[index].quantity += product.quantity;
      }
      state.totalPrice += product.price * product.quantity;
      state.totalQuantity += product.quantity;
    },
    removeToBasket: (state, action) => {
      const product = { ...action.payload };

      const index = state.products.findIndex((p) => p.id === product.id);

      if (index !== -1) {
        state.products[index].quantity === product.quantity
          ? state.products.splice(index, 1)
          : (state.products[index].quantity -= product.quantity);
      }

      state.totalPrice -= product.price * product.quantity;
      state.totalQuantity -= product.quantity;
    }
  }
});

export const { addToBasket, removeToBasket } = basketSlice.actions;

export default basketSlice.reducer;
