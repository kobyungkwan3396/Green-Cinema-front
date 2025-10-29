import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({ id: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8082/auth/login', {
        id: form.id,
        password: form.password
      });
      console.log('로그인 성공:', res.data);
      setMessage(res.data.message);

      localStorage.setItem('userCode', res.data.userCode);
    } catch (err) {
      console.error('로그인 실패:', err);
      setMessage('로그인 실패');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          placeholder="아이디"
          value={form.id}
          onChange={handleChange}
        /><br />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
        /><br />
        <button type="submit">로그인</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;