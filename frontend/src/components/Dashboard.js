import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/api/users', {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}` },
      });
      setUsers(data);
    };

    const fetchClassrooms = async () => {
      const { data } = await axios.get('/api/classrooms', {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}` },
      });
      setClassrooms(data);
    };

    fetchUsers();
    fetchClassrooms();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.role}</li>
        ))}
      </ul>
      <h2>Classrooms</h2>
      <ul>
        {classrooms.map(classroom => (
          <li key={classroom._id}>{classroom.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
