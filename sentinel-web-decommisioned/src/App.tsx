import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { AgentRegistry } from './pages/AgentRegistry';
import { Wallet } from './pages/Wallet';
import { Manager } from './pages/Manager';
import { WalletProvider } from './context/WalletContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <WalletProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/registry" element={
              <ProtectedRoute>
                <AgentRegistry />
              </ProtectedRoute>
            } />
            <Route path="/wallet" element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            } />
            <Route path="/manager" element={
              <ProtectedRoute>
                <Manager />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </Router>
    </WalletProvider>
  );
}

export default App;
