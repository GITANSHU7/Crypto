// import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
// import { RootState } from "../store";

// // create coin data slice
// interface CoinDataState {
//   coin: any | null;
  
// }

// const initialState: CoinDataState = {
//   coin: null,
// };

// export const coinDataSlice = createSlice({
//   name: "coinData",
//   initialState,
//   reducers: {
//     setCoinData: (state, action) => {
//       state.coin = action.payload;
//     },
//   },
// });

// export const { setCoinData } = coinDataSlice.actions;

// src/slices/coinDataSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CoinDataState {
  coins: any[];  // Array to store multiple coin data
  total: number; // Total number of coins
  success: boolean; // Status of the request
}

const initialState: CoinDataState = {
  coins: [],
  total: 0,
  success: false,
};

export const coinDataSlice = createSlice({
  name: "coinData",
  initialState,
  reducers: {
    setCoinData: (state, action: PayloadAction<CoinDataState>) => {
      state.coins = action.payload.coins;
      state.total = action.payload.total;
      state.success = action.payload.success;
    },
  },
});

export const { setCoinData } = coinDataSlice.actions;



// export const { setCoinData } = coinDataSlice.actions;

// export const selectCoinData = (state: RootState) => state.coinData;

// export default coinDataSlice.reducer;
