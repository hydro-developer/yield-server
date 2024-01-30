const utils = require('../utils');

const apiUrl = "https://index.hydroprotocol.finance";

const apyFunction = async () => {
  const tvl = await utils.getData(`${apiUrl}/total-value-locked`);
  const apy = await utils.getData(`${apiUrl}/apy`);

  const hINJ = {
    pool: '',   // hINJ contract
    chain: utils.formatChain('injective'),
    project: 'hydro-protocol',
    symbol: 'hINJ',
    tvlUsd: Number(tvl),
    apy: apy * 100,
  };

  // TODO
  // const hInjInjPool = {
  //   pool: '',   // inj-hINJ contract
  //   chain: utils.formatChain('injective'),
  //   project: 'hydro-protocol',
  //   symbol: 'inj-hINJ pool',
  //   tvlUsd: Number(tvl),
  //   apy: apy * 100,
  // };

  // TODO: Inj-hInj pool
  // TODO: INJ-hInj pool
  return [hINJ];
};

module.exports = {
  timetravel: false,
  apy: apyFunction,
  url: 'https://app.hydroprotocol.finance/lsd',
};