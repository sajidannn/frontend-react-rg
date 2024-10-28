import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

function TableData({ students, deleteStudent }) {
  return (
    <Table id="table-student" data-testid="table-student">
      {' '}
      <Thead>
        <Tr>
          <Th>No</Th>
          <Th>Full Name</Th>
          <Th>Faculty</Th>
          <Th>Program Study</Th>
          <Th>Option</Th>
        </Tr>
      </Thead>
      <Tbody>
        {students &&
          students.map((student, index) => (
            <Tr key={student.id} className="student-data-row">
              <Td>{index + 1}</Td>
              <Td>
                <Link to={`/student/${student.id}`}>{student.fullname}</Link>
              </Td>
              <Td>{student.faculty}</Td>
              <Td>{student.programStudy}</Td>
              <Td>
                <Button
                  type="button"
                  id="delete-btn"
                  data-testid={`delete-${student.id}`}
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
}

export default TableData;
