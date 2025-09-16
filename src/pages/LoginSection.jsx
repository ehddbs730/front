import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/loginSection.css';

function LoginSection() {
  return (
    <div className="login-section">
      <div className="login-section__buttons">
        <Link to="/student-login" className="login-section__student">
          <div className="login-section__icon">학생 아이콘</div>
          <div className="login-section__text">학생 로그인</div>
        </Link>
        <Link to="/admin-login" className="login-section__admin">
          <div className="login-section__icon">운영자 아이콘</div>
          <div className="login-section__text">운영자 로그인</div>
        </Link>
      </div>
      <div className="login-section-signup-row">
        <span className="login-section-signup-text">아직 회원이 아니신가요?</span>
        <Link to="/sign-up" className="login-section-signup-link">회원가입</Link>
      </div>
      <div className="login-section-alternative">
        <Link to="/new-login" className="login-section-alternative-link">
          로그인 페이지 다른 예시
        </Link>
      </div>
    </div>
  );
}

export default LoginSection;
