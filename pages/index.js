import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const index = () => {
  // const [currentAccount, setCurrentAccount] = useState("");
  const address = "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97";

  const provider = new ethers.providers.EtherscanProvider();

  //to see the balance of this account

  const balance = console.log("provider", provider);

  return (
    <div>
      <h1>Today I am lerning EtherJs(everything)</h1>
      <h2>What is EtherJs?</h2>
      hello
    </div>
  );
};

export default index;
