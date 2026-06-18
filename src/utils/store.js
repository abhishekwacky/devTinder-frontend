import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import feedReducer from "../utils/feedSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});
