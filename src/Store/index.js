import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducers from "./Slice";

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});
