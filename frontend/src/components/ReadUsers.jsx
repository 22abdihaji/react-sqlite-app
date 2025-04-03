import React from "react";

function ReadUsers({ users }) {
  return (
    <>
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
    </>
  );
}

export default ReadUsers;
