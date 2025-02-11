import { configureStore } from "@reduxjs/toolkit";

// Пустой редьюсер для начала
const userReducer = (state = {}, action) => {
  return state;
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
