export const api =
  process.env.HAPI_NETWORK_API || 'https://jungle4.api.eosnation.io'
export const chainId =
  process.env.HAPI_NETWORK_CHAIN_ID ||
  '73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d'
export const wallet = process.env.HAPI_NETWORK_WALLET || 'http://wallet:9999'
export const creatorAccount =
  process.env.HAPI_NETWORK_CREATOR_ACCOUNT || 'account'
export const creatorPassword =
  process.env.HAPI_NETWORK_CREATOR_PASSWORD || 'PW...'
