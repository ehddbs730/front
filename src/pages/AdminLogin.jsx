import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/adminLogin.css';

function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
    <div className="admin-login-layout">
      <div className="admin-login-left">
        <span className="admin-login-logo-text">
          로고<br />or<br />이미지
        </span>
      </div>
      <div className="admin-login-right">
        <form className="admin-login-form" onSubmit={handleLogin}>
          <label className="admin-login-label" htmlFor="admin-id">ID</label>
          <input id="admin-id" className="admin-login-input" type="text" />
          <label className="admin-login-label" htmlFor="admin-pwd">PWD</label>
          <input id="admin-pwd" className="admin-login-input" type="password" />
          <button className="admin-login-btn" type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

