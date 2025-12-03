import React from 'react';
import { Activity, Cpu, Globe, Server } from 'lucide-react';
import { SentinelCard } from '../components/ui/SentinelCard';
import { agents } from '../lib/mockData';

export const Dashboard: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-ink-primary tracking-tight">SYSTEM DASHBOARD</h1>
                <div className="font-mono text-xs text-primary border border-primary/30 px-3 py-1 bg-primary/5">
                    STATUS: OPERATIONAL
                </div>
            </div>

            {/* System Health */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SentinelCard title="CPU LOAD" icon={<Cpu className="w-5 h-5" />}>
                    <div className="flex items-center justify-center py-8">
                        <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-border-faint border-t-primary border-r-primary rotate-45">
                            <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                                <span className="text-2xl font-mono font-bold text-ink-primary">42%</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-mono text-xs text-ink-secondary">8 CORES ACTIVE</div>
                </SentinelCard>

                <SentinelCard title="MEMORY USAGE" icon={<Server className="w-5 h-5" />}>
                    <div className="flex items-center justify-center py-8">
                        <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-border-faint border-t-primary border-l-primary -rotate-12">
                            <div className="absolute inset-0 flex items-center justify-center rotate-12">
                                <span className="text-2xl font-mono font-bold text-ink-primary">64%</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-mono text-xs text-ink-secondary">16GB / 32GB</div>
                </SentinelCard>

                <SentinelCard title="NETWORK TRAFFIC" icon={<Activity className="w-5 h-5" />}>
                    <div className="flex items-center justify-center py-8">
                        <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-border-faint border-b-primary border-l-primary rotate-90">
                            <div className="absolute inset-0 flex items-center justify-center -rotate-90">
                                <span className="text-2xl font-mono font-bold text-ink-primary">1.2</span>
                                <span className="text-xs text-ink-secondary ml-1">GB/s</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-mono text-xs text-ink-secondary">UPLINK STABLE</div>
                </SentinelCard>
            </div>

            {/* Active Operations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-lg font-bold text-ink-primary flex items-center gap-2">
                        <Activity className="w-5 h-5 text-primary" />
                        ACTIVE OPERATIONS
                    </h2>

                    <div className="bg-surface border border-border-faint overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-canvas border-b border-border-faint font-mono text-xs text-ink-secondary uppercase">
                                <tr>
                                    <th className="px-6 py-3">Agent ID</th>
                                    <th className="px-6 py-3">Operation Type</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-faint font-mono">
                                {agents.map((agent) => (
                                    <tr key={agent.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 text-ink-primary">{agent.id}</td>
                                        <td className="px-6 py-4 text-ink-secondary">{agent.type}</td>
                                        <td className="px-6 py-4">
                                            <span className={
                                                agent.status === 'FLAGGED' ? 'text-hazard' :
                                                    agent.status === 'BUSY' ? 'text-[#FFB74D]' : 'text-primary'
                                            }>{agent.status}</span>
                                        </td>
                                        <td className="px-6 py-4 text-ink-secondary">{agent.uptime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Map / Network View */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold text-ink-primary flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        GLOBAL NETWORK
                    </h2>
                    <SentinelCard className="h-[300px] flex items-center justify-center bg-canvas/50">
                        <div className="relative w-full h-full p-4">
                            {/* Abstract Map Visualization */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/40 rounded-full"></div>

                            {/* Nodes */}
                            <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00E676]"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00E676]"></div>
                            <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#FFB74D] rounded-full shadow-[0_0_10px_#FFB74D]"></div>

                            {/* Connecting Lines (CSS only for simplicity) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                <line x1="33%" y1="33%" x2="75%" y2="66%" stroke="#00E676" strokeWidth="1" />
                                <line x1="33%" y1="33%" x2="66%" y2="25%" stroke="#00E676" strokeWidth="1" />
                            </svg>

                            <div className="absolute bottom-4 left-4 font-mono text-xs text-ink-secondary">
                                NODES: 142<br />
                                LATENCY: 42ms
                            </div>
                        </div>
                    </SentinelCard>
                </div>
            </div>
        </div>
    );
};
