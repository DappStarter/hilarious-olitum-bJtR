require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile pupil hockey entry bubble survey'; 
let testAccounts = [
"0xcdef31b913b11a8090a64b0ce5ae8f2043289412d70a8d8091bc1925ccab3e80",
"0x3749108c9fbe685d09504f0e0dd424fe6a4a237d871fcd88b516435e30fbaddb",
"0xdf67e5450e38e71246d0724dfa8ff48893fa1c99a808f8afc24378be6e5cf0d3",
"0xb664756c881b30b0a4be374508ff504baeb4745256037943d6779867da9eb5d2",
"0x042a8ae06a9fb8e303c6ec8b6b9b9bd6524e4049aecc451ef8015f945322b3bf",
"0x179d0b371e27d502cc75e87f7e32e22845eef42b52ad6c36c5b66df8fc6ea5c6",
"0xf35b5764b5bed2dc04ee5aec5ac58719c1c8047fdadd3eb646197efda9f01178",
"0x8d2e86e4de6fe75f13ff0ea4d0179b38480db2a60f900d0372c1762ea733a127",
"0x3acbf8ccaa2ff514fb684a129d1f2a605b1cd989152f0d053474fdad1a337ab8",
"0x0ea61df4917455856cfdf4f70a337ed8f2a1ddabd1baa1ed3667e7e105de370c"
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

