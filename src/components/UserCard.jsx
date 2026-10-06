const UserCard = ({ user, onDelete }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{user.name}</h3>
      </div>
      <div className="card-body">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
      <button className="btn-delete" onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </div>
  );
};

export default UserCard;
