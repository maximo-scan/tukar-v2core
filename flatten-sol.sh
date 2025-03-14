#!/bin/bash 

set -e 

forge flatten \
    --output /uniswap-v2-periphery/build/flatten/UniswapV2ERC20.sol \
    /uniswap-interface/uniswap-v2-periphery/contracts/UniswapV2ERC20.sol