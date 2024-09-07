import { authAPI, requestDataAPI, upgradeByIdAPI } from "@/api/gamer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authThunk = createAsyncThunk(
  "gamer/auth",
  async (tgId: string) => {
    const response = await authAPI(tgId);
    return response;
  },
);

export const requestDataThunk = createAsyncThunk(
  "gamer/requestData",
  async () => {
    const response = await requestDataAPI();
    return response;
  },
);

export const upgradeByIdThunk = createAsyncThunk(
  "upgrades/upgradeById",
  async (upgradeId: string) => {
    const response = await upgradeByIdAPI(upgradeId);
    return response;
  },
);