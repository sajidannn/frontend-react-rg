import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Table from '../components/Table';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [facultyFilter, setFacultyFilter] = useState('All');

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3001/student')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setFilteredStudents(data);
        setLoading(false);
      });
  }, []);

  const deleteStudent = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
      setFilteredStudents(
        updatedStudents.filter((student) =>
          facultyFilter === 'All' ? true : student.faculty === facultyFilter
        )
      );
    });
  };

  const handleFilterChange = (e) => {
    const selectedFaculty = e.target.value;
    setFacultyFilter(selectedFaculty);
    if (selectedFaculty === 'All') {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(
        students.filter((student) => student.faculty === selectedFaculty)
      );
    }
  };

  if (loading) return <p>Loading ...</p>;

  return (
    <>
      <Navbar />
      <div>
        {/* <label htmlFor="faculty-filter">Filter by Faculty:</label> */}
        <select
          id="faculty-filter"
          data-testid="filter"
          value={facultyFilter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">
            Fakultas Ilmu Sosial dan Politik
          </option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </select>
      </div>
      <Table students={filteredStudents} deleteStudent={deleteStudent} />
    </>
  );
};

export default Student;
