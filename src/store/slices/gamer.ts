import { createSlice } from "@reduxjs/toolkit";
import { GamerIE } from "@/shared/types";
import { requestDataThunk } from "../thunks/gamer";

const initialState: GamerIE = {
  clicks: 0,
  coins: 0,
  cpc: 0,
  cps: 0,
  upgrades: { offroad: [], circle: [], drag: [] },
  last_ts: Date.now()
}

const gamerSlice = createSlice({
  name: "gamer_slice",
  initialState,
  extraReducers: (b) => {
    // @ts-ignore
    b.addCase(requestDataThunk.fulfilled, (state, action) => {
      const gamer: GamerIE = action.payload;
      const { clicks, coins, cpc, cps, upgrades, last_ts } = gamer;
      const updatedState = { clicks, coins, cpc, cps, upgrades, last_ts };
      state = updatedState;
    });
  },
  reducers: {}
});

export default gamerSlice.reducer;