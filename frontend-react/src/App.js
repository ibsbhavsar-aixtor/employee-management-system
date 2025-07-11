
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeFormPage from './pages/EmployeeFormPage';
import { login } from './utils/auth';

function App() {

  useEffect(() => {
    // Automatically login when app loads
    login('admin', 'admin123')
      .then(() => console.log('JWT token stored'))
      .catch((err) => console.error('Login failed', err));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <nav className="bg-blue-600 text-white p-4 shadow-md mb-4">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-semibold">Employee Manager</h1>
            <div className="space-x-4">
              <Link to="/employees" className="hover:underline">Employees</Link>
              <Link to="/add" className="hover:underline">Add Employee</Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/employees" />} />
            <Route path="/employees" element={<EmployeeListPage />} />
            <Route path="/add" element={<EmployeeFormPage />} />
            <Route path="/edit/:id" element={<EmployeeFormPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
