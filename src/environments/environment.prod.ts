const ocean = 'https://ocean.defichain-income.com';

export const environment = {
  production: true,
  prices: ocean + '/v0/mainnet/prices?size=1000',
  oraclePrices: ocean + '/v0/mainnet/loans/tokens?size=1000',
  poolpairsocean: ocean + '/v0/mainnet/poolpairs?size=1000',
  cur: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json',
  cake: 'https://api.cakedefi.com/coins/apy',
  dfx: 'https://api.dfx.swiss/v1/statistic',
  oceanstats: ocean + '/v0/mainnet/stats',
  blocks: ocean + '/v0/mainnet/blocks?size=2000',
  account_tokens: ocean + '/v0/mainnet/address/ADDRESS/tokens?size=1000',
  account_balance: ocean + '/v0/mainnet/address/ADDRESS/balance?size=1000',
  address_vaults: ocean + '/v0/mainnet/address/ADDRESS_VAULTS/vaults?size=1000',
  mamon_account: 'https://sync.defichain-masternode-monitor.com/v1/KEY/masternodes',
  mamon_account_node: 'https://api.defichain-masternode-monitor.com/v1/masternodes/info/',
  burninfo: 'https://api.mydefichain.com/v1/getburninfo/',
  version: '9.7.0',
  bittrex: 'https://api.bittrex.com/v3/currencies/DFI',
  kucoin: 'https://api.kucoin.com/api/v1/currencies/DFI',
  graphql: 'https://next.graphql.defichain-income.com/graphql',
  // Matomo
  matomoId: 6,
  matomoUrl: 'https://analytics.topiet.de/'
};
