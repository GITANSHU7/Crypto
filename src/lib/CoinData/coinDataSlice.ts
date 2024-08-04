
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CoinDataState {
  coins: any[];  
  total: number; 
  success: boolean;
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

