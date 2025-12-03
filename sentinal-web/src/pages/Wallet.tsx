import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon } from 'lucide-react';

export function Wallet() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-ink-primary font-header mb-8">THE VAULT</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <WalletIcon className="w-32 h-32 text-primary" />
                    </div>
                    <h3 className="text-ink-secondary text-sm font-mono uppercase mb-2">Total Balance (USDC)</h3>
                    <p className="text-5xl font-mono font-bold text-ink-primary mb-6 tracking-tighter">$4,291.00</p>
                    <div className="flex gap-4">
                        <Button variant="primary" size="sm">
                            <ArrowDownLeft className="w-4 h-4 mr-2" />
                            DEPOSIT
                        </Button>
                        <Button variant="secondary" size="sm">
                            <ArrowUpRight className="w-4 h-4 mr-2" />
                            WITHDRAW
                        </Button>
                    </div>
                </Card>

                <Card className="p-8">
                    <h3 className="text-ink-secondary text-sm font-mono uppercase mb-2">HBAR Balance</h3>
                    <p className="text-5xl font-mono font-bold text-primary mb-6 tracking-tighter">15,420.50</p>
                    <p className="text-sm text-ink-secondary font-mono">≈ $1,233.64 USD</p>
                </Card>
            </div>

            <h2 className="text-xl font-bold text-ink-primary font-header mb-6">TRANSACTION HISTORY</h2>
            <Card className="p-0 overflow-hidden">
                <table className="w-full text-left text-sm font-mono">
                    <thead className="bg-surface border-b border-border-faint text-ink-secondary uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Hash</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-faint bg-canvas/50">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-primary">0x7a...4b9c</td>
                                <td className="px-6 py-4 text-ink-primary flex items-center gap-2">
                                    {i % 2 === 0 ? <ArrowUpRight className="w-4 h-4 text-hazard" /> : <ArrowDownLeft className="w-4 h-4 text-primary" />}
                                    {i % 2 === 0 ? 'PAYMENT' : 'DEPOSIT'}
                                </td>
                                <td className="px-6 py-4 text-ink-primary font-bold">{i % 2 === 0 ? '-' : '+'} {i * 100} USDC</td>
                                <td className="px-6 py-4">
                                    <Badge variant={i === 1 ? 'hazard' : 'success'}>
                                        {i === 1 ? 'PENDING' : 'CONFIRMED'}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4 text-ink-secondary">{i * 15}m ago</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
