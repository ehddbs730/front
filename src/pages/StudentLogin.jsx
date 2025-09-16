import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/studentLogin.css';

function StudentLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/ticket-purchase');
  };

  return (
    <div className="student-login-layout">
      <div className="student-login-left">
        <span className="student-login-logo-text">
          로고<br />or<br />이미지
        </span>
      </div>
      <div className="student-login-right">
        <form className="student-login-form" onSubmit={handleLogin}>
          <label className="student-login-label" htmlFor="student-id">ID</label>
          <input id="student-id" className="student-login-input" type="text" />
          <label className="student-login-label" htmlFor="student-pwd">PWD</label>
          <input id="student-pwd" className="student-login-input" type="password" />
          <button className="student-login-btn" type="submit">LOGIN</button>
        </form>
        <div className="student-login-divider">간편하게 시작하기</div>
        <div className="student-login-socials">
          <button className="student-login-social google">구글</button>
          <button className="student-login-social naver">네이버</button>
        </div>
        <div className="student-login-signup-row">
          <span className="student-login-signup-text">아직 회원이 아니신가요?</span>
          <Link to="/sign-up" className="student-login-signup-link">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;