import { configureStore } from "@reduxjs/toolkit";
import chatDataSlice from "./chatDataSlice";

const appStore = configureStore({
  reducer: {
    chatInfo: chatDataSlice,
  },
});

export default appStore;
