import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = configSlice.actions;
export default configSlice.reducer;
