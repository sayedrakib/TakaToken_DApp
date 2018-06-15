// Importing node-modules we need
import { default as Web3 } from "web3";
import { default as contract } from "truffle-contract";
import TakaABI from "../build/contracts/TakaToken.json";

// Importing compiled contracts here

// Importing styles
import styles from "./styles/index.scss";

// Making usable abstraction from our artifacts, so we can use it in code.
var TakaToken = contract(TakaABI);
let currAddr;
window.App = {
    /**
     * Initializing Web3 provider for our app
     */
    initWeb3: () => {
        if (typeof web3 !== "undefined") web3 = new Web3(web3.currentProvider);
        else
            web3 = new Web3(
                new Web3.providers.HttpProvider("http://localhost:9545")
            );
    },

    /**
     * Initializing our App
     */
    init: () => {
        App.initWeb3();
        // Init your contract here and set web3provider to it.
        TakaToken.setProvider(web3.currentProvider);

        currAddr = web3.eth.defaultAccount;
        web3.eth.getAccounts(function (erro, result) {
            web3.eth.defaultAccount = result[0];
            console.log("Sender's Account: " + web3.eth.defaultAccount);
            document.getElementById("currAddr").innerHTML = web3.eth.defaultAccount;
        });

        App.getBalance();
    },

    getBalance: () => {
        let currAmnt = document.getElementById("currAmnt");
        TakaToken.deployed().then((instance) => {
            return instance.balanceOf(web3.eth.defaultAccount)
        }).then(res => {
            console.log('Current balanceee: ' + res.toNumber());
            currAmnt.innerHTML = res.toNumber();
        })
    },

    transferTaka: () => {
        let receiver = document.getElementById("receiver");
        let amount = document.getElementById("amountToBeSent");

        console.log('Receiver: ' + receiver.value);
        console.log('Amount to be sent: ' + amount.value);
        

        TakaToken.deployed().then(instance => {
            console.log( "receiver.value: " + receiver.value);
            console.log( "currAddr: " + currAddr);
            instance.transfer(receiver.value, amount.value, {from: currAddr}).then (res => {
                instance.transfer().watch( (err, result) => {
                    instance.balanceOf(currAddr).then( resa => {
                        console.log('the transferEvent() event was triggered', err, result);
                        console.log('dkjsfksdklj', resa);
                    });
                });
            })

            .catch ( (err) => {
                console.log(err)
            })
        })

    }

};



/**
 * Initializing our App on window load
 * 'load' Happens when browser window loads
 */
window.addEventListener("load", () => {
    App.init();
});
