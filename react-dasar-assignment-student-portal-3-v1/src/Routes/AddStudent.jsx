import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

const AddStudent = () => {
  const [fullname, setFullname] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [Address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('Male');
  const [programStudy, setProgramStudy] = useState('Ekonomi');

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/student');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !birthDate || !gender || !programStudy) {
      alert('Harap isi semua data sebelum menambahkan mahasiswa.');
      return;
    }

    const faculty = getFaculty(programStudy);
    const newStudent = {
      fullname,
      profilePicture,
      Address,
      phoneNumber,
      birthDate,
      gender,
      programStudy,
      faculty,
    };

    fetch('http://localhost:3001/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    });

    handleBack();
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
      <form id="form-student" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-name">Fullname</label>
          <input
            type="text"
            id="input-name"
            data-testid="name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-profile">Profile Picture</label>
          <input
            type="text"
            id="input-profile"
            data-testid="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-address">Address</label>
          <input
            type="text"
            id="input-address"
            data-testid="address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-phone">Phone Number</label>
          <input
            type="text"
            id="input-phone"
            data-testid="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-date">Birth Date</label>
          <input
            type="date"
            id="input-date"
            data-testid="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-gender">Gender</label>
          <select
            id="input-gender"
            data-testid="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="input-prody">Program Study</label>
          <select
            id="input-prody"
            data-testid="prody"
            value={programStudy}
            onChange={(e) => setProgramStudy(e.target.value)}
          >
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">
              Hubungan Internasional
            </option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </select>
        </div>
        <input
          type="submit"
          value="Add student"
          id="add-btn"
          data-testid="add-btn"
        />
      </form>
    </>
  );
};

export default AddStudent;
