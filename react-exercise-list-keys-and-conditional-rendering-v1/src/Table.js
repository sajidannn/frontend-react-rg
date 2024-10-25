import React from "react";

function Table({ mentors }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>House</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {!mentors ? (
          <tr>
            <td>Data not available</td>
            <td>Data not available</td>
            <td>Data not available</td>
          </tr>
        ) : (
          mentors.map((mentor) => (
            <tr key={mentor.id} style={{ backgroundColor: mentor.id % 2 === 0 ? "white" : "lightCyan" }}>
              <td>{mentor.name}</td>
              <td>{mentor.house}</td>
              <td>{mentor.email}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
