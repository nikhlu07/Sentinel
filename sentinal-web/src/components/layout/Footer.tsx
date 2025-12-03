import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="border-t border-border-faint bg-surface py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3 opacity-70">
                    <img src="/logo.svg" alt="Sentinel Logo" className="w-6 h-6" />
                    <span className="font-mono text-sm text-ink-secondary">SENTINEL SYSTEMS INC.</span>
                </div>

                <div className="flex gap-8 text-xs font-mono text-ink-secondary">
                    <Link to="#" className="hover:text-primary transition-colors">DOCS</Link>
                    <Link to="#" className="hover:text-primary transition-colors">API</Link>
                    <Link to="#" className="hover:text-primary transition-colors">STATUS</Link>
                    <Link to="#" className="hover:text-primary transition-colors">PRIVACY</Link>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-xs font-mono text-primary uppercase">All Systems Nominal</span>
                </div>
            </div>
        </footer>
    );
}
