import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
