import React, { useState } from 'react';
import { useAuth } from '../authentication';

const Home = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // Pass the search term to the parent component (or a callback function)
  };
  const handlelogout = () => {
    logout(); 
  };
  return (
    <div>
        <button onClick={handlelogout}>logout</button>
        <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>

        <div className="task-manager-container">
      <h2>Task Manager</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Home;
