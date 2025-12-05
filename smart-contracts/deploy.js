const fs = require('fs');
const solc = require('solc');
const { Client, PrivateKey, ContractCreateFlow, AccountId, ContractFunctionParameters } = require('@hashgraph/sdk');
require('dotenv').config();

async function main() {
    try {
        // 1. Compile
        console.log("Compiling Escrow.sol...");
        const source = fs.readFileSync('Escrow.sol', 'utf8');
        const input = {
            language: 'Solidity',
            sources: { 'Escrow.sol': { content: source } },
            settings: { outputSelection: { '*': { '*': ['*'] } } }
        };
        const output = JSON.parse(solc.compile(JSON.stringify(input)));

        if (output.errors) {
            output.errors.forEach(err => console.error(err.formattedMessage));
            if (output.errors.some(err => err.severity === 'error')) return;
        }

        const bytecode = output.contracts['Escrow.sol']['Escrow'].evm.bytecode.object;
        console.log("Compilation successful.");

        // 2. Deploy
        const client = Client.forTestnet();
        const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
        client.setOperator(
            operatorId,
            PrivateKey.fromString(process.env.OPERATOR_KEY)
        );

        console.log("Deploying to Hedera Testnet...");
        const transaction = new ContractCreateFlow()
            .setBytecode(bytecode)
            .setGas(1000000)
            .setConstructorParameters(
                new ContractFunctionParameters().addAddress(operatorId.toSolidityAddress())
            );

        const txResponse = await transaction.execute(client);
        const receipt = await txResponse.getReceipt(client);
        const contractId = receipt.contractId;

        console.log(`Contract deployed! ID: ${contractId.toString()}`);
        console.log(`Solidity Address: ${contractId.toSolidityAddress()}`);
        fs.writeFileSync('contract-id.txt', contractId.toString());
    } catch (error) {
        console.error("Deployment failed:", error);
    }
}

main();
