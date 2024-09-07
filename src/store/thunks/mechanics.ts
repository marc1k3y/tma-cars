import { intervalMsgAPI } from "@/api/mechanics";
import { IntervalMsgIE } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const intervalMsgThunk = createAsyncThunk(
  "mech/intervalMsg",
  async (reqData: IntervalMsgIE) => {
    const response = await intervalMsgAPI(reqData);
    return response;
  },
);