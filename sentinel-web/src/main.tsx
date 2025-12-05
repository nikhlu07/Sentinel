import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { HederaTestnet } from "@thirdweb-dev/chains";
import './index.css'
import App from './App.tsx'

const activeChain = HederaTestnet;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="uux6mJ1splqFcXdxmJ_HR5w42pggFo5kMGtl6JwPGS3iVwRYjnJCdo875jIw7wHcl-n6I-r6hHHtE9QG8jkigg" // Ideally from env
    >
      <App />
    </ThirdwebProvider>
  </StrictMode>,
)
