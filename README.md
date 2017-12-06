# webpack-dapp-boilerplate

This boilerplate has everything you need to kickstart your blockchain project and start writing your own contracts with truffle and web3. Webpack included, creating your own dApp from backend to frontend is easy and comfortable - for any web developer it feels like home.

## Getting started

### Prerequisites
  
  1. [Git](https://git-scm.com/)
  2. [Node](https://nodejs.org/)
  3. Clone this repository `git clone https://github.com/kajumito/webpack-dapp-boilerplate.git`

### Installation
  1. [Truffle](http://truffleframework.com/) - `npm install -g truffle`
  1. Go to project directory `cd webpack-dapp-boilerplate`
  2. Install all dependencies with `npm install`

### Environment
#### Starting app backend
  1. In terminal `truffle develop` to run development console and start simulate Ethereum client in `http://localhost:9545`
  2. In development console compile smart contracts in `./contracts` -folder with  `compile`
  3. After that migrate  smart contracts in `./contracts` -folder with `migrate`
  4. After editing files in `./contracts` you need to `compile` and `migrate` again to see the change. 
#### Starting app frontend
  4. Open another terminal tab in same folder and start webpack dev server in `http://localhost:8080`  with `npm start`  -command
  5. Now go to `http://localhost:8080` and you should see the app running
  6. Changes you make to files in  `./src` - folder will hot reload.

## Usage

Easiest way to use/test your app on browser is by using Chrome extension Metamask. Learn more about using Metamask with truffle from http://truffleframework.com/docs/advanced/truffle-with-metamask.

## Testing

For testing this boilerplate uses commonly known and easy to use Javascript testing framework Mocha and for assertions Chai -library which both are built in to truffle by default.

>Note: If you are unfamiliar at unit testing with Mocha you can learn more about it from https://mochajs.org/ and to learn more about Chai assertion library http://chaijs.com/

Test -files are located in `./test` -folder. Testing files inside this folder is very easy - just run `npm run test` or  `truffle test` in terminal.

>Note: It's very important to test your dApps precisely and carefully because we are developing applications that are running in blockchain so the changes to code is difficult to implement after release.

## License & Author
#### Author Kasper Tontti, project is under the MIT license. 
