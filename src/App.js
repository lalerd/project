import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Users from './Users';
import ContentManagement from './ContentManagement';
import ReportPage from './ReportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login sayfası */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard sayfası */}
        <Route path="/users" element={<Users />} /> 
        <Route path="/content" element={<ContentManagement />} />
        <Route path="/reports" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
