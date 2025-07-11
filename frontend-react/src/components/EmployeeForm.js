
import React from 'react';

function EmployeeForm({ form, onChange, onSubmit, isEdit, onCancel }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {isEdit ? "Edit Employee" : "Add New Employee"}
      </h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="salary" type="number" placeholder="Salary" value={form.salary} onChange={handleChange} className="w-full border p-2 rounded" />
      <div className="flex space-x-2">
        <button onClick={onSubmit} className="bg-blue-600 text-white px-4 py-2 rounded"> {isEdit ? "Update" : "Add"} </button>
        {isEdit && <button onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>}
      </div>
    </div>
  );
}

export default EmployeeForm;
