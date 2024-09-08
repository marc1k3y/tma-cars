import { $authHost, $host } from "@/shared/service/http";
import { UpgradeByIdIE } from "@/shared/types";

export const authAPI = async (tgId: string) => {
  try {
    const { data } = await $host.get("gamer/auth", { params: { tg_id: tgId } });
    return data;
  } catch (e) {
    return console.error(e);
  }
}

export const requestDataAPI = async () => {
  try {
    const { data } = await $authHost.get("gamer/requestData");
    return data;
  } catch (e) {
    return console.error(e);
  }
}

export const upgradeByIdAPI = async (reqData: UpgradeByIdIE) => {
  try {
    const { data } = await $authHost.get("upgrades/upgradeById", { params: reqData });
    return data;
  } catch (e) {
    return console.error(e);
  }
}