import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleWare) => 
    getDefaultMiddleWare().concat(api.middleware),
});

//setupListeners(store.dispatch);

export default store;
