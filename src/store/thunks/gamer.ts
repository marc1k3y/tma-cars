import { authAPI, requestDataAPI, upgradeByIdAPI } from "@/api/gamer";
import { UpgradeByIdIE } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { upgradeInc } from "../slices/gamer";

export const authThunk = createAsyncThunk(
  "gamer/auth",
  async (tgId: string, thunkAPI) => {
    const response = await authAPI(tgId);
    if (!response.token) throw new Error("token not found");
    localStorage.setItem("token", response.token);
    thunkAPI.dispatch(requestDataThunk());
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
  async (reqData: UpgradeByIdIE, thunkAPI) => {
    const response = await upgradeByIdAPI(reqData);
    if (response.updated === true) thunkAPI.dispatch(upgradeInc(reqData))
    return response;
  },
);