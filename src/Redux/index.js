import { configureStore } from "@reduxjs/toolkit";
import questionSlices from "./questSlices";
import userSlices from "./userSlices";

export const MyStore = configureStore({
  reducer: {
    questions: questionSlices,
    users: userSlices,
  },
});
