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
          <strong>Contract Owner: </strong>
          </p>
          <p>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="owner"
          />
        </p>

        <p>
          <strong>Contract Address: </strong>
          <p>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="getConAddr"
          /> 
          </p>
        </p>


        <p>
          <strong>Contract balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="balContract"
            /><weak>  ETH </weak>
        </p>

        <p>
          <strong>Owner Withdraw totally from contract: </strong>
          <ContractForm
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="withdraw"
          />
        </p>


        <p>
          <strong>Transfer from Contract to: </strong>
          <ContractForm
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="transfer"
          />
        </p>
      </div>

      <div className="section">
        <h2>Account:</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>
    </div>
  );
};
