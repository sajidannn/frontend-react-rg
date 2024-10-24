import React from 'react';

function Form() {
  return (
    <form id="form-student">
      <div>
        <label htmlFor="input-name">Fullname</label>
        <input type="text" id="input-name" />
      </div>
      <div>
        <label htmlFor="input-date">Birth Date</label>
        <input type="date" id="input-date" />
      </div>
      <div>
        <label htmlFor="input-gender">Gender</label>
        <select id="input-gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="input-prody">Program Study</label>
        <select id="input-prody">
          <option value="Ekonomi">Ekonomi</option>
          <option value="Manajemen">Manajemen</option>
          <option value="Akuntansi">Akuntansi</option>
          <option value="Administrasi Publik">Administrasi Publik</option>
          <option value="Administrasi Bisnis">Administrasi Bisnis</option>
          <option value="Hubungan Internasional">Hubungan Internasional</option>
          <option value="Teknik Sipil">Teknik Sipil</option>
          <option value="Arsitektur">Arsitektur</option>
          <option value="Matematika">Matematika</option>
          <option value="Fisika">Fisika</option>
          <option value="Informatika">Informatika</option>
        </select>
      </div>
      <input type="submit" value="Add student" id="add-btn" />
    </form>
  );
}

export default Form;
