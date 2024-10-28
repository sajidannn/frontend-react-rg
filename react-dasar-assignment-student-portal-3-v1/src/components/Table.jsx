import { Link } from 'react-router-dom';

function Table({ students, deleteStudent }) {
  return (
    <table id="table-student">
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Faculty</th>
          <th>Program Study</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {students &&
          students.map((student, index) => (
            <tr key={student.id} className="student-data-row">
              <td>{index + 1}</td>
              <td>
                <Link to={`/student/${student.id}`}>{student.fullname}</Link>
              </td>
              <td>{student.faculty}</td>
              <td>{student.programStudy}</td>
              <td>
                <button
                  type="button"
                  id="delete-btn"
                  data-testid={`delete-${student.id}`}
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
