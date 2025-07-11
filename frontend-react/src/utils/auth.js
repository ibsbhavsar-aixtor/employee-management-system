import axios from 'axios';

// Logs in and stores JWT in localStorage
export const login = async (username, password) => {
  const response = await axios.post('http://localhost:8080/auth/login', {
    username,
    password
  });
  const token = response.data.token;
  localStorage.setItem('jwt', token);
  return token;
};

// Retrieves stored token
export const getToken = () => localStorage.getItem('jwt');
