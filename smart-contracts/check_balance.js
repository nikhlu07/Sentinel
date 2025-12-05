const { Client, AccountId, PrivateKey, Hbar } = require("@hashgraph/sdk");
require("dotenv").config();

async function main() {
    const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
    const operatorKey = PrivateKey.fromString(process.env.OPERATOR_KEY);
    const client = Client.forTestnet().setOperator(operatorId, operatorKey);

    const balance = await new AccountBalanceQuery()
        .setAccountId(operatorId)
        .execute(client);

    console.log(`User Balance: ${balance.hbars.toString()}`);
}

const { AccountBalanceQuery } = require("@hashgraph/sdk");
main();
