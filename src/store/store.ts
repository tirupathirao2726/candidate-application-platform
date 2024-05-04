import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "../reducerSlices/loaderSlice";
import jobListingSlice from "../reducerSlices/jobListingSlice";
export const store = configureStore({
  reducer:{ loader: loaderSlice,jobs:jobListingSlice},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;