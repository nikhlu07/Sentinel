import React, { useState } from 'react';
import { Filter, Search, Star } from 'lucide-react';
import { SentinelCard } from '../components/ui/SentinelCard';
import { Button } from '../components/ui/Button';
import { agents } from '../lib/mockData';

export const AgentRegistry: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAgents = agents.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-ink-primary tracking-tight mb-2">AGENT REGISTRY</h1>
                    <p className="font-mono text-sm text-ink-secondary">// INDEX: {agents.length} UNITS AVAILABLE</p>
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-secondary" />
                        <input
                            type="text"
                            placeholder="SEARCH NEURAL INDEX..."
                            className="w-full bg-surface border border-border-faint text-ink-primary text-sm font-mono py-2 pl-10 pr-4 focus:outline-none focus:border-primary placeholder:text-ink-secondary/50"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="secondary" className="flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        FILTER
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                {filteredAgents.map((agent) => (
                    <SentinelCard key={agent.id} className="flex flex-col md:flex-row items-center gap-6 p-6 hover:bg-white/5">
                        {/* Avatar / Identicon */}
                        <div className="w-16 h-16 bg-canvas border border-border-faint rounded-full flex items-center justify-center shrink-0">
                            <div className={`w-12 h-12 rounded-full ${agent.status === 'ONLINE' ? 'bg-primary/20' :
                                    agent.status === 'BUSY' ? 'bg-[#FFB74D]/20' : 'bg-hazard/20'
                                }`}></div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 w-full items-center">
                            <div>
                                <h3 className="font-mono text-lg text-ink-primary">{agent.name}</h3>
                                <div className="text-xs font-mono text-ink-secondary">{agent.id}</div>
                            </div>

                            <div>
                                <div className="text-xs font-mono text-ink-secondary mb-1">CAPABILITIES</div>
                                <div className="flex flex-wrap gap-2">
                                    {agent.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono border border-border-faint px-2 py-0.5 text-ink-secondary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="text-xs font-mono text-ink-secondary mb-1">PERFORMANCE</div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 text-primary">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span className="font-mono text-sm">{agent.reputation}%</span>
                                    </div>
                                    <div className="font-mono text-sm text-ink-primary">
                                        {agent.price} ETH/hr
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button variant="primary" className="w-full md:w-auto">
                                    [ HIRE UNIT ]
                                </Button>
                            </div>
                        </div>
                    </SentinelCard>
                ))}
            </div>
        </div>
    );
};
