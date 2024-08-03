import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const index = () => {
  const address = "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97";
  const apiKey = "WS6U15YJ8GRAWGSX72DT13F7R85QDXR9FU"; // replace with your API key

  const [transactions, settransactions] = useState([]);

  const etherjs = async () => {
    const provider = new ethers.providers.EtherscanProvider("mainnet", apiKey);

    // console.log("provider", provider);

    const balance = await provider.getBalance(address);

    const showBalance = ethers.utils.formatEther(balance);
    // console.log("balance", balance);
    console.log("showBalance in readable format", showBalance);

    const checkFunction = await provider.getBlock(20447039);
    const contract = await provider.getCode(address); //to get any contract code deployed by the addresss, if not any, return oxs
    const blockWithTransaction = await provider.getBlockWithTransactions(
      20447039
    ); //to get any contract code deployed by the addresss, if not any, return oxs

    // console.log("contract code", contract);
    console.log("blockwithtransaction", blockWithTransaction);

    const number = checkFunction.transactions;
    settransactions(number);
    // console.log(checkFunction);

    const transactionCount = await provider.getTransactionCount(address);

    console.log("transactionCount", transactionCount);
  };
  // console.log(transactions);

  useEffect(() => {
    etherjs();
  }, []);

  return (
    <div>
      <h1>Today I am lerning EtherJs(everything)</h1>

      {transactions.map((transaction, i) => {
        return (
          <div key={i + 1}>
            <h2>Transaction Number: {i + 1}</h2>
            <p>{transaction}</p>
          </div>
        );
      })}
    </div>
  );
};

export default index;
