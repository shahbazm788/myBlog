import { configureStore } from "@reduxjs/toolkit";
import Comment from "./slices/commetSlice";
const store = configureStore({
  reducer: {
    Comment: Comment.reducer
  }
});

export default store;
