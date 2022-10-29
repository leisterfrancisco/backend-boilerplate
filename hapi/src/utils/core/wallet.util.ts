// import fetch from 'node-fetch'

// import { networkConfig } from '../../config'

// const post = async (endpoint: string, body) => {
//   const res = await fetch(`${networkConfig.wallet}/v1/wallet${endpoint}`, {
//     body,
//     method: 'POST'
//   })
//   const data = await res.json()

//   if (data.code) {
//     throw new Error(`${data.error.name}: ${data.error.what}`)
//   }

//   return data
// }

// export const create = async (walletName: string) =>
//   post('/create', `"${walletName}"`)

// export const createKey = async (walletName: string) =>
//   post('/create_key', `["${walletName}",""]`)

// export const listKeys = async (walletName: string, walletPassword: string) => {
//   const keys = await post('/list_keys', `["${walletName}","${walletPassword}"]`)

//   if (keys.length > 0) {
//     return keys.map(keypair => keypair[1])
//   }

//   return []
// }

// export const listWallets = async () => post('/list_wallets', {})

// export const lock = async (walletName: string) =>
//   post('/lock', `"${walletName}"`)

// export const lockAll = async () => post('/lock_all', {})

// export const unlock = async (walletName: string, walletPassword: string) =>
//   post('/unlock', `["${walletName}","${walletPassword}"]`)
