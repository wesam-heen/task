import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";

export const fetchPosts = createAsyncThunk(
  "PostsSlice/fetchPosts",
  async (page) => {
    //get all category from API

    return await useGetData(`/posts?_page=${page}&_limit=5`);
  }
);
export const fetchPost = createAsyncThunk(
  "PostsSlice/fetchPost",
  async (postNumber) => {
    //get all category from API

    return await useGetData(`/posts/${postNumber}`);
  }
);

const initialState = {
  posts: [],
  post: {},
  loading: true,
};

const PostsSlice = createSlice({
  name: "PostsSlice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // Add category to the state array
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      //when fetch pending loading active
      state.loading = "loading";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

//export const {} = PostsSlice.actions;

export default PostsSlice.reducer;
