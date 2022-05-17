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
        <h2>ETH Transfer Management</h2>

        <h3>My Account:</h3>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />

        <p>
          <h3>Contract Ownership: </h3>
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
          <h3>Contract Address: </h3>
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
          <strong>Contract balance:&nbsp;&nbsp;</strong>
          <strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="balContract"
            /></strong>
            <weak>  &nbsp;&nbsp;ETH </weak>
        </p>

        <div className="section">
        <h2>Only-Owner Operation</h2>
        <p>
          <strong>Transfer from Contract to (only owner): </strong>
          <ContractForm
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="transfer"
          />
        </p>

        <p>
          <strong>Withdraw ALL ETH (only owner): </strong>
          <ContractForm
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Payable"
            method="withdraw"
          />
        </p>
        <strong>Set contract Ownership (only owner):</strong>
        <ContractForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Payable"
          method="setOwner"
        />
      </div>
      </div>
    </div>
  );
};
