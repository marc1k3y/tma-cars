import { $authHost } from "@/shared/service/http";
import { IntervalMsgIE } from "@/shared/types";

export const intervalMsgAPI = async (reqData: IntervalMsgIE) => {
  try {
    const { data } = await $authHost.get("upgrades/upgradeById", { params: reqData });
    return data;
  } catch (e) {
    return console.error(e);
  }
}