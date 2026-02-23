import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  };

  const formStyle = {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '1rem',
    fontSize: '1rem',
  };

  const toggleStyle = {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate database using localStorage initialized from userdata.json
    const storedUsers = JSON.parse(localStorage.getItem('userdata')) || [];

    if (isLogin) {
      const user = storedUsers.find(u => u.username === username && u.password === password);
      if (user) {
        onLogin(user);
        navigate('/');
      } else {
        setError('Invalid credentials');
      }
    } else {
      if (storedUsers.find(u => u.username === username)) {
        setError('User already exists');
        return;
      }
      const newUser = { username, password };
      const updatedUsers = [...storedUsers, newUser];
      
      // "Insert" record into simulated userdata.json (localStorage)
      localStorage.setItem('userdata', JSON.stringify(updatedUsers));
      
      onLogin(newUser);
      navigate('/');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <p style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span style={toggleStyle} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;