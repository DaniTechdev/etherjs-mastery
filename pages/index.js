import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const index = () => {
  // const [currentAccount, setCurrentAccount] = useState("");
  const address = "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97";
  const apiKey = "WS6U15YJ8GRAWGSX72DT13F7R85QDXR9FU"; // replace with your API key

  const etherjs = async () => {
    const provider = new ethers.providers.EtherscanProvider("mainnet", apiKey);
    const balance = await provider.getBalance(address);
    console.log("balance", balance);
  };

  useEffect(() => {
    etherjs();
  }, []);
  return (
    <div>
      <h1>Today I am lerning EtherJs(everything)</h1>
      <h2>What is EtherJs?</h2>
      hello
    </div>
  );
};

export default index;
