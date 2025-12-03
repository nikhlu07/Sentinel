import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


export function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("INITIALIZING CORE SYSTEMS...");

    const statusMessages = [
        "ESTABLISHING SECURE CONNECTION...",
        "VERIFYING BIOMETRICS...",
        "LOADING SENTINEL PROTOCOLS...",
        "SYNCING WITH HEDERA NETWORK...",
        "SYSTEM READY."
    ];

    useEffect(() => {
        const duration = 2500; // Total loading time in ms
        const intervalTime = 50;
        const steps = duration / intervalTime;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const newProgress = Math.min((currentStep / steps) * 100, 100);
            setProgress(newProgress);

            // Update status message based on progress
            const messageIndex = Math.floor((newProgress / 100) * (statusMessages.length - 1));
            setStatus(statusMessages[messageIndex]);

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas text-ink-primary overflow-hidden">
            {/* Scanline Overlay */}
            <div className="scanlines pointer-events-none absolute inset-0 z-10"></div>

            <div className="relative z-20 flex flex-col items-center max-w-md w-full px-6">
                {/* Logo Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-fast"></div>
                    <img src="/logo.svg" alt="Sentinel Logo" className="w-24 h-24 relative z-10" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl font-header font-bold tracking-widest mb-2 text-center"
                >
                    SENTINEL
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xs font-mono text-primary tracking-[0.2em] mb-12"
                >
                    WATCHTOWER OS v2.0
                </motion.div>

                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-border-faint relative overflow-hidden mb-4">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(0,230,118,0.5)]"
                        style={{ width: `${progress}%` }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                {/* Status Text */}
                <div className="w-full flex justify-between items-end font-mono text-[10px] uppercase">
                    <span className="text-ink-secondary min-w-[200px]">
                        {status}
                        <span className="animate-pulse">_</span>
                    </span>
                    <span className="text-primary font-bold">{Math.round(progress)}%</span>
                </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-lg"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 rounded-tr-lg"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30 rounded-bl-lg"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-lg"></div>
        </div>
    );
}
