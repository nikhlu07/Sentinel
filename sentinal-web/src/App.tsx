import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';

import { Registry } from './pages/Registry';
import { Wallet } from './pages/Wallet';
import { AgentDetail } from './pages/AgentDetail';
import { Settings } from './pages/Settings';

import { WalletProvider } from './context/WalletContext';

function App() {
  return (
    <WalletProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/agent/:id" element={<AgentDetail />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </WalletProvider>
  );
}

export default App;
