import { createContext, useContext, type ReactNode } from 'react';
import { useAddress, useMetamask, useDisconnect, useConnectionStatus } from "@thirdweb-dev/react";

interface WalletContextType {
    connect: () => Promise<void>;
    disconnect: () => void;
    accountId: string | undefined;
    isConnected: boolean;
    isConnecting: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
    const connectionStatus = useConnectionStatus();

    const connect = async () => {
        try {
            await connectWithMetamask();
        } catch (error) {
            console.error("Failed to connect wallet:", error);
        }
    };

    const disconnect = () => {
        disconnectWallet();
    };

    return (
        <WalletContext.Provider value={{
            connect,
            disconnect,
            accountId: address,
            isConnected: !!address,
            isConnecting: connectionStatus === "connecting"
        }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
