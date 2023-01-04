require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile pulp harvest globe flock traffic'; 
let testAccounts = [
"0xf636aa8b7287b921ab835756cb23d1bd90d20ec00ff7436d5460635e73cf9f20",
"0x6927f9e009ede9df94d3fe7adbfb61b7cde904718300e2025055bd39a2ca8f5d",
"0x01a86bb4ec3ba97d6a3c264fe500e9ae3215b92a9ba5c905f086f545b24a06f0",
"0xafe2ce9662729bff11317f87eea75191147550fb7bcf4b88094122257d43b5fc",
"0xfd059e48306e3dab9e1521c87c770621ceaf2d4ec5a48aff41b17c2e945b8111",
"0x45d504ade0a2933b5412516b7e18ec64306c2be5e6c09a2c62dbde544f0495ce",
"0xe970dcb34c3dfd6b4cfd64d51866052144a96a2a5d67ccec9b79ed3254ec0b0b",
"0x4a65bdedbe27ebb22b0907b7370f990876a130548087c32a92b2309c5a4702d6",
"0xe9199812d4e4c543ca7faa546542041b93a068515df0c1edd90989beb14fde59",
"0xf850dd6fcbc5d8c2cd19cbad93f255e14262a9926c1c108a143c214ed0ec4d31"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

