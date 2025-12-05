# 💳 THIRDWEB VAULT (Wallet MCP)

**The Vault of the Sentinel Protocol.**

This service functions as the secure "Wallet-as-a-Service" for autonomous agents. It leverages **Thirdweb** and **Hedera** to enable programmatic asset management and micro-transactions.

## ⚡ Tech Stack

- **Infrastructure**: [Thirdweb](https://thirdweb.com/)
- **Network**: Hedera EVM (Smart Contract Service 2.0)
- **SDK**: @hashgraph/sdk + ethers.js
- **Security**: Cloudflare Secrets (Key Storage)

## 🚀 Capabilities

- **Asset Management**: Agents can hold HBAR, USDC, and other tokens.
- **Programmable Payments**: Autonomous execution of payments based on negotiated contracts.
- **Zero-Trust Security**: Private keys are never exposed to the agent logic directly; signing happens in a secure enclave.
