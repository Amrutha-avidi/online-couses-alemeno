import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    like:(state,action)=>{
      if(!state.currentVideo.likes.includes(action.payload)){
        state.currentVideo.likes.push(action.payload)
      }
    }
  },
});

export const { fetchStart, fetchSuccess, fetchFailure ,like} =
  videoSlice.actions;

export default videoSlice.reducer;