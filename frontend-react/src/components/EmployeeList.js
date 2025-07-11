import React from 'react';

function EmployeeList({ employees, onEdit, onDelete }) {
  const formatSalary = (salary) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(salary);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-md text-sm">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Designation</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Salary</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td className="p-4 text-center text-gray-500" colSpan="5">
                No employees found
              </td>
            </tr>
          ) : (
            employees.map(emp => (
              <tr key={emp.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{emp.name}</td>
                <td className="px-4 py-2">{emp.designation}</td>
                <td className="px-4 py-2">{emp.email}</td>
                <td className="px-4 py-2">{formatSalary(emp.salary)}</td>
                <td className="px-4 py-2 space-x-1">
                  <button
                    onClick={() => onEdit(emp)}
                    className="bg-yellow-500 text-white px-2 py-1 text-xs rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(emp.id)}
                    className="bg-red-500 text-white px-2 py-1 text-xs rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
