import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get("http://localhost:3001/post/");
  return response.data; // Retourne directement les données
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postsData: [],
  },
  reducers: {
    getPostsSuccess: (state, action) => {
      state.postsData = action.payload;
    },
    addPost: (state, action) => {
      state.postsData.push(action.payload);
    },
    updatePost: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            message: action.payload[0],
          };
        } else {
          return post;
        }
      });
    },
    deletePost: (state, action) => {
      state.postsData = state.postsData.filter(
        (post) => post._id !== action.payload
      );
    },
    like: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            likers: [...post.likers, action.payload[0]],
          };
        } else {
          return post;
        }
      });
    },
    dislike: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            likers: post.likers.filter(
              (userId) => userId !== action.payload[0]
            ),
          };
        } else {
          return post;
        }
      });
    },
  },

  // ExtraReducers permet d'ajouter des cas de figure à nos reducers
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.postsData = action.payload;
    });
  },
});

export const {
  getPostsSuccess,
  addPost,
  deletePost,
  updatePost,
  like,
  dislike,
} = postSlice.actions;
export default postSlice.reducer;
