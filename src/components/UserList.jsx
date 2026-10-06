import UserCard from './UserCard';

const UserList = ({ users, onDeleteUser }) => {
  return (
    <div className="list-container">
      <h2>Contact List</h2>
      {users.length === 0 ? (
        <p className="empty-message">No contacts found. Add one above!</p>
      ) : (
        <div className="card-grid">
          {users.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              onDelete={onDeleteUser} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
