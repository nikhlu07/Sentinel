import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ConnectWallet } from "@thirdweb-dev/react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-40 border-b border-border-faint bg-canvas/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/logo.svg" alt="Sentinel Logo" className="w-8 h-8" />
                        <span className="font-header font-bold text-xl tracking-wider text-ink-primary">SENTINEL</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/dashboard" className="text-sm font-mono text-ink-secondary hover:text-primary transition-colors uppercase tracking-wide">[ MONITOR ]</Link>
                        <Link to="/registry" className="text-sm font-mono text-ink-secondary hover:text-primary transition-colors uppercase tracking-wide">[ AGENTS ]</Link>
                        <Link to="/wallet" className="text-sm font-mono text-ink-secondary hover:text-primary transition-colors uppercase tracking-wide">[ VAULT ]</Link>
                        <Link to="/settings" className="text-sm font-mono text-ink-secondary hover:text-primary transition-colors uppercase tracking-wide">[ CONFIG ]</Link>

                        <ConnectWallet
                            theme="dark"
                            btnTitle="Connect Wallet"
                            className="!bg-primary !text-ink-primary !font-mono !text-sm !rounded-none !border !border-primary hover:!bg-primary/90"
                        />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-ink-secondary hover:text-primary"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-surface border-b border-border-faint">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/dashboard" className="block px-3 py-2 text-base font-mono text-ink-secondary hover:text-primary hover:bg-white/5">[ MONITOR ]</Link>
                        <Link to="/registry" className="block px-3 py-2 text-base font-mono text-ink-secondary hover:text-primary hover:bg-white/5">[ AGENTS ]</Link>
                        <Link to="/wallet" className="block px-3 py-2 text-base font-mono text-ink-secondary hover:text-primary hover:bg-white/5">[ VAULT ]</Link>
                        <Link to="/settings" className="block px-3 py-2 text-base font-mono text-ink-secondary hover:text-primary hover:bg-white/5">[ CONFIG ]</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
