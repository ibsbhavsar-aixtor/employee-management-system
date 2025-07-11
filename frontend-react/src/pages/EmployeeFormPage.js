
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import EmployeeForm from '../components/EmployeeForm';

function EmployeeFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ name: '', designation: '', salary: '', email: '' });
  const isEdit = Boolean(id);
  const baseUrl = "http://localhost:8080/api/employee";

  useEffect(() => {
    if (isEdit && location.state) {
      setForm(location.state);
    } else if (isEdit) {
      axiosInstance.get(`${baseUrl}/${id}`).then(res => setForm(res.data));
    }
  }, [id]);

  const handleSubmit = () => {
    const action = isEdit ? axiosInstance.put(`${baseUrl}/${id}`, form) : axiosInstance.post(baseUrl, form);
    action.then(() => navigate('/employees'));
  };

  return <EmployeeForm form={form} onChange={setForm} onSubmit={handleSubmit} isEdit={isEdit} onCancel={() => navigate('/employees')} />;
}

export default EmployeeFormPage;
