# EtherTransfer-drizzle-version

> This is a dApp created by drizzle box. It mainly contains two parts: Truffle project and React project.

### Prerequisite
- Ganache UI
- Truffle 
- Node.js


### Launch the truffle project part:

```linux
npm install --save @openzeppelin/contracts
truffle compile
```
> It should compile all the smart contract.

> Use `sudo truffle compile` to download and update the solc version.

Open ganache UI, config the `RPC SERVER:HTTP://127.0.0.1:8545` and add our project by selecting the `truffle-config.js`, then click `Restart`. 

Next step run the following command:
```linux
sudo truffle migrate --network develop
```
By running this, the smart contracts in this project were deployed to the blockchain.

We can check what was happened to our blockchain in ganache UI. 

### Launch the react project part:
> At **/drizzle-test/app** directory run:

> **NOTE: This step always forgot! Don't waste your time**

```linux
npm install
npm run start
```

> **`HOST=0.0.0.0 npm run start`** can let other people access your app from their computers.

> Now we can enjoy interacting with our blockchain and smart contract using front-end webpage.

### Enjoy!...

---
<p align="center">
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v2y0a2nx2cfcaw4ytdtk.png" />
</p>

---

