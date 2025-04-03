import React, { useState } from "react";
import axios from "axios";

function CreateUser({ onUserAdded }) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", form);
    setForm({ name: "", email: "" });
    onUserAdded(); // ilmoita että käyttäjä lisätty
  };

  return (
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
  );
}

export default CreateUser;
