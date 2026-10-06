import { useState } from 'react';

const UserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("All fields are required!");
      return;
    }
    
    onAddUser({
      id: crypto.randomUUID(),
      ...formData
    });
    
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="form-container">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default UserForm;
