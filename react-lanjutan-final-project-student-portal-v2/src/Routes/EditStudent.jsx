import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Input, Select } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EditStudent = () => {
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const faculty = getFaculty(student.programStudy);
    const updatedStudent = {
      fullname: student.fullname,
      profilePicture: student.profilePicture,
      address: student.address,
      phoneNumber: student.phoneNumber,
      birthDate: student.birthDate,
      gender: student.gender,
      programStudy: student.programStudy,
      faculty: faculty,
    };

    fetch(`http://localhost:3001/student/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedStudent),
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
        return;
      }
      navigate('/student');
    });
  };

  const getFaculty = (programStudy) => {
    switch (programStudy) {
      case 'Ekonomi':
      case 'Manajemen':
      case 'Akuntansi':
        return 'Fakultas Ekonomi';
      case 'Administrasi Publik':
      case 'Administrasi Bisnis':
      case 'Hubungan Internasional':
        return 'Fakultas Ilmu Sosial dan Politik';
      case 'Teknik Sipil':
      case 'Arsitektur':
        return 'Fakultas Teknik';
      case 'Matematika':
      case 'Fisika':
      case 'Informatika':
        return 'Fakultas Teknologi Informasi dan Sains';
      default:
        return '';
    }
  };

  return (
    <>
      <Navbar />
      <Box
        as="main"
        paddingTop="60px"
        display="flex"
        flexDirection="column"
        minHeight="90vh"
      >
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div>
            <form id="form-student" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullname">Full Name:</label>
                <Input
                  type="text"
                  id="fullname"
                  data-testid="name"
                  value={student.fullname || ''}
                  onChange={(e) =>
                    setStudent({ ...student, fullname: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <Input
                  id="address"
                  type="text"
                  data-testid="address"
                  value={student.address || ''}
                  onChange={(e) =>
                    setStudent({ ...student, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Input
                  id="phoneNumber"
                  ype="text"
                  data-testid="phoneNumber"
                  value={student.phoneNumber || ''}
                  onChange={(e) =>
                    setStudent({ ...student, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="birthDate">Birth Date:</label>
                <Input
                  id="birthDate"
                  type="date"
                  data-testid="date"
                  value={student.birthDate || ''}
                  onChange={(e) =>
                    setStudent({ ...student, birthDate: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <Select
                  id="gender"
                  data-testid="gender"
                  value={student.gender || ''}
                  onChange={(e) =>
                    setStudent({ ...student, gender: e.target.value })
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </div>
              <div>
                <label htmlFor="input-prody">Program Study</label>
                <Select
                  id="input-prody"
                  data-testid="prody"
                  value={student.programStudy || ''}
                  onChange={(e) =>
                    setStudent({ ...student, programStudy: e.target.value })
                  }
                >
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Manajemen">Manajemen</option>
                  <option value="Akuntansi">Akuntansi</option>
                  <option value="Administrasi Publik">
                    Administrasi Publik
                  </option>
                  <option value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </option>
                  <option value="Hubungan Internasional">
                    Hubungan Internasional
                  </option>
                  <option value="Teknik Sipil">Teknik Sipil</option>
                  <option value="Arsitektur">Arsitektur</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Informatika">Informatika</option>
                </Select>
              </div>
              <Button
                type="submit"
                colorScheme="blue"
                id="edit-btn"
                data-testid="edit-btn"
              >
                Edit Student
              </Button>
            </form>

            <div>
              <img
                src={student.profilePicture}
                alt="Student"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default EditStudent;
