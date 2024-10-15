import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./service/dummyData";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  //   caching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);