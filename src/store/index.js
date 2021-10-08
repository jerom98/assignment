import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeItem(state, action) {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = filteredItems;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
