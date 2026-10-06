import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers([newUser, ...users]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Contact Cards</h1>
      </header>
      
      <main className="main-content">
        <UserForm onAddUser={handleAddUser} />
        <UserList users={users} onDeleteUser={handleDeleteUser} />
      </main>
    </div>
  );
}

export default App;
