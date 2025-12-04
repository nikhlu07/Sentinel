import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Switch } from '../components/ui/Switch';
import { Eye, Trash2, Save } from 'lucide-react';

export function Settings() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-ink-primary font-header mb-8">SYSTEM SETTINGS</h1>

            <div className="space-y-8">
                {/* Profile Settings */}
                <section>
                    <h2 className="text-xl font-bold text-ink-primary font-header mb-4">OPERATOR PROFILE</h2>
                    <Card className="p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-ink-secondary uppercase">Operator Name</label>
                                <Input defaultValue="Sentinel-Alpha" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-ink-secondary uppercase">Contact Email</label>
                                <Input defaultValue="operator@sentinel.ai" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <Button variant="primary" size="sm">
                                <Save className="w-4 h-4 mr-2" />
                                SAVE CHANGES
                            </Button>
                        </div>
                    </Card>
                </section>

                {/* API Keys */}
                <section>
                    <h2 className="text-xl font-bold text-ink-primary font-header mb-4">API KEYS</h2>
                    <Card className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-canvas border border-border-faint rounded-sm">
                                <div>
                                    <p className="font-mono text-sm text-ink-primary mb-1">Production Key</p>
                                    <p className="font-mono text-xs text-ink-secondary">Last used: 2 mins ago</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-mono text-xs text-ink-secondary bg-surface px-2 py-1 rounded">sk_live_...9921</span>
                                    <Button variant="ghost" size="sm">
                                        <Eye className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <Button variant="secondary" size="sm" className="w-full">
                                GENERATE NEW KEY
                            </Button>
                        </div>
                    </Card>
                </section>

                {/* Notification Preferences */}
                <section>
                    <h2 className="text-xl font-bold text-ink-primary font-header mb-4">NOTIFICATIONS</h2>
                    <Card className="p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-ink-primary text-sm">System Alerts</p>
                                <p className="text-xs text-ink-secondary">Receive notifications for system anomalies.</p>
                            </div>
                            <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-ink-primary text-sm">Transaction Updates</p>
                                <p className="text-xs text-ink-secondary">Get notified when transactions are confirmed.</p>
                            </div>
                            <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-ink-primary text-sm">Agent Status Changes</p>
                                <p className="text-xs text-ink-secondary">Notify when agents go offline or busy.</p>
                            </div>
                            <Switch checked={false} />
                        </div>
                    </Card>
                </section>

                {/* Danger Zone */}
                <section>
                    <h2 className="text-xl font-bold text-hazard font-header mb-4">DANGER ZONE</h2>
                    <Card className="p-6 border-hazard/40 bg-hazard/5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-ink-primary text-sm">Delete Account</p>
                                <p className="text-xs text-ink-secondary">Permanently remove your account and all data.</p>
                            </div>
                            <Button variant="hazard" size="sm">
                                <Trash2 className="w-4 h-4 mr-2" />
                                DELETE ACCOUNT
                            </Button>
                        </div>
                    </Card>
                </section>
            </div>
        </div>
    );
}
