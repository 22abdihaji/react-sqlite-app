import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", form);
    setForm({ name: "", email: "" });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">SQLite Database Interface</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            className="form-control"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            className="form-control"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <button className="btn btn-primary">Add User</button>
      </form>

      <h4>Users</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

