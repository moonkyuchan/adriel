import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
  name: "dateSlice",
  initialState: {
    time: new Date(),
  },
  reducers: {
    updateDate: (state) => {
      state.time = new Date().toISOString();
    },
  },
});

export const { updateDate } = dateSlice.actions;

export default dateSlice.reducer;
