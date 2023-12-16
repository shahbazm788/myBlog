import { createSlice } from "@reduxjs/toolkit";

let inittalState = [];

let Comment = createSlice({
  name: "Comment",
  initialState: inittalState,
  reducers: {
    addComment(state, action) {
      state.push(action.payload);
    }
  }
});

export default Comment;
export const { addComment } = Comment.actions;
