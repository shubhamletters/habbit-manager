import { configureStore } from "@reduxjs/toolkit";

import habitReducer from "./features/habitFeatures";

export const store = configureStore({
	reducer: {
		habit: habitReducer,
	},
});