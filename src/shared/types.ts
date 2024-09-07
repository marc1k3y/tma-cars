export interface IntervalMsgIE {
  clicksPerSession: number
  timestamp: number
}

export interface UgradeItemIE {
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
  upgrades: { offroad: UgradeItemIE[], circle: UgradeItemIE[], drag: UgradeItemIE[] }
  last_ts: number
}