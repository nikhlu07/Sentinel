import { createContext, useContext, type ReactNode, useState, useEffect } from 'react';
import { HashConnect, HashConnectTypes, MessageTypes } from 'hashconnect';

interface WalletContextType {
    connect: () => Promise<void>;
    disconnect: () => void;
    accountId: string | undefined;
    isConnected: boolean;
    isConnecting: boolean;
    pairingString: string;
    sendTransaction: (trans: any) => Promise<any>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const hashConnect = new HashConnect();

const appMetadata: HashConnectTypes.AppMetadata = {
    name: "Sentinel Protocol",
    description: "The Trust Layer for the Open Agentic Web",
    icon: "https://sentinel-protocol.pages.dev/logo.svg"
};

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [pairingData, setPairingData] = useState<HashConnectTypes.SavedPairingData | null>(null);
    const [pairingString, setPairingString] = useState<string>("");
    const [isConnecting, setIsConnecting] = useState(false);

    useEffect(() => {
        const initHashConnect = async () => {
            // Initialize and Debug
            const initData = await hashConnect.init(appMetadata, "testnet", false);
            setPairingString(initData.pairingString);

            // Check for existing connection
            if (initData.savedPairings.length > 0) {
                setPairingData(initData.savedPairings[0]);
            }
        };

        initHashConnect();

        // Event Listeners
        hashConnect.foundExtensionEvent.on((data) => {
            console.log("Found extension", data);
        });

        hashConnect.pairingEvent.on((data) => {
            console.log("Paired with wallet", data);
            setPairingData(data.pairingData!);
            setIsConnecting(false);
        });
    }, []);

    const connect = async () => {
        setIsConnecting(true);
        hashConnect.connectToLocalWallet();
    };

    const disconnect = () => {
        hashConnect.disconnect(pairingData?.topic!);
        setPairingData(null);
    };

    const sendTransaction = async (trans: any) => {
        if (!pairingData) return;

        const transaction: HashConnectTypes.Transaction = {
            topic: pairingData.topic,
            byteArray: trans.toBytes(),
            metadata: {
                accountToSign: pairingData.accountIds[0],
                returnTransaction: false
            }
        };

        return await hashConnect.sendTransaction(pairingData.topic, transaction);
    };

    return (
        <WalletContext.Provider value={{
            connect,
            disconnect,
            sendTransaction,
            accountId: pairingData?.accountIds[0],
            isConnected: !!pairingData,
            isConnecting,
            pairingString
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
