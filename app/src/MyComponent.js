import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>Private Geth BlockChain</h1>
        <p>
          Built by Yongchang He.
        </p>
      </div>

      <div className="section">
        <h2>Ether Transfer</h2>
        <p>
          Please input an uint value:
        </p>
        <p>
          <strong>Contract Owner account: </strong>
          </p>
          <p>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="owner"

          />
        </p>

      </div>







      <div className="section">
        <h2>My Account Address</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>SimpleStorage</h2>
        <p>
          Please input an uint value:
        </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="SimpleStorage"
            method="storedData"
          />
        </p>
        <ContractForm drizzle={drizzle} contract="SimpleStorage" method="set" />
      </div>




    </div>
  );
};
