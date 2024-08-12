import React, { useState } from 'react';
import axios from 'axios';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      history.push('/dashboard');
    } catch (error) {
      console.error('Invalid login credentials');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
