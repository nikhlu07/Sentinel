import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';

import { Registry } from './pages/Registry';
import { Wallet } from './pages/Wallet';
import { AgentDetail } from './pages/AgentDetail';
import { Settings } from './pages/Settings';

import { LoadingScreen } from './components/ui/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate system boot sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Slightly longer than the LoadingScreen animation to ensure completion

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
