#!/bin/bash

set -e 

forge verify-contract \
  --flatten \
  --watch \
  --rpc-url https://rpc.etpscan.xyz \
  --compiler-version "v0.6.6+commit.6c089d02" \
  --verifier blockscout \
  --verifier-url 'https://etpscan.xyz/api' \
  --verifier-api-key 'empty' \
  --chain 20256789 \
  --retries 5 \
  --force \
  0xaf9821ae076eEC866e20C202826af8ff379401D6 \
  ./contracts/UniswapV2Router01.sol:UniswapV2Router01