import { configureStore } from "@reduxjs/toolkit";
import { coinDataSlice } from "./CoinData/coinDataSlice";


export const makeStore = () => {
  return configureStore({
    reducer: {
        // Add global slices here
        coinDataSlice: coinDataSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];