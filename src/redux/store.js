import { configureStore } from "@reduxjs/toolkit";
import { listReducers } from "./reducers/listReducers";



export const store = configureStore({
    reducer: {
        list: listReducers , // Add your slice to the reducers
      },
});