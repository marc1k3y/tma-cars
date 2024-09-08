export type UpgradeCategoriesType = "offroad" | "circle" | "drag";

export interface IntervalMsgIE {
  clicksPerSession: number
  timestamp: number
}

export interface UpgradeItemIE {
  id: string
  title: string
  level: number
  startPrice: number
  priceFactor: number
}

export interface GamerIE {
  clicks: number
  coins: number
  cpc: number
  cps: number
  upgrades: { offroad: UpgradeItemIE[], circle: UpgradeItemIE[], drag: UpgradeItemIE[] }
  last_ts: number
}

export interface UpgradeByIdIE {
  category: UpgradeCategoriesType
  upgradeId: string
}