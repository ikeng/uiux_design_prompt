import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Generator from './pages/Generator';
import About from './pages/About';
import Templates from './pages/Templates';
import './i18n';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
            <Header />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generator" element={<Generator />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
