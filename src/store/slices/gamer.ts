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
      state.clicks = clicks;
      state.coins = coins;
      state.cpc = cpc;
      state.cps = cps;
      state.upgrades = upgrades;
      state.last_ts = last_ts;
    });
  },
  reducers: {}
});

export default gamerSlice.reducer;