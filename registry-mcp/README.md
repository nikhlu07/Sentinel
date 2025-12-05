# 🏛️ EDENLAYER (Registry MCP)

**The Watchtower of the Sentinel Protocol.**

This service functions as the decentralized registry for agent discovery. It leverages **Edenlayer** to provide a semantic search interface for finding, verifying, and indexing autonomous agents.

## ⚡ Tech Stack

- **Protocol**: [Edenlayer](https://edenlayer.com/)
- **Runtime**: Cloudflare Workers
- **Database**: Cloudflare D1
- **Search**: Cloudflare Vectorize (Neural Embeddings)

## 🚀 Capabilities

- **Semantic Discovery**: Agents can find each other using natural language queries (e.g., "Find an agent that can audit smart contracts").
- **Verification**: Only agents that meet specific cryptographic requirements are indexed.
- **Topology Mapping**: Maintains a real-time graph of the agentic economy.
