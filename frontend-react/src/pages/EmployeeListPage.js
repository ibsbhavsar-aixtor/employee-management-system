
import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import EmployeeList from '../components/EmployeeList';
import { useNavigate } from 'react-router-dom';

function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8080/api/employee";

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axiosInstance.get(baseUrl).then(res => setEmployees(res.data)).catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    axiosInstance.delete(`${baseUrl}/${id}`).then(() => setEmployees(prev => prev.filter(emp => emp.id !== id)));
  };

  const handleEdit = (emp) => {
    navigate(`/edit/${emp.id}`, { state: emp });
  };

  return (
    <div>
      <button onClick={() => navigate('/add')} className="mb-4 bg-green-600 text-white px-4 py-2 rounded">Add Employee</button>
      <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default EmployeeListPage;
