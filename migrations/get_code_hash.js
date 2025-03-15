const TukarV2Pair = artifacts.require('TukarV2Pair.sol');
module.exports = async (callback) => {
  console.log(
    'TukarV2Pair bytecode hash (Look for INIT_CODE_HASH):\n%s',
    (web3.utils.keccak256(TukarV2Pair.bytecode)).substring(2)
  );
  callback();
}