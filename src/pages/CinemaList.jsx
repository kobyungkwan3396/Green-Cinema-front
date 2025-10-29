import React, { useEffect, useState } from 'react';

function CinemaList() {
  const [cinemas, setCinemas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCinemaList = async () => {
      try {
        const response = await fetch('http://localhost:8082/cinemafranchise/list3');
        if (!response.ok) throw new Error('서버 응답 오류');
        const result = await response.json();
        setCinemas(result);
      } catch (err) {
        setError('조회 실패: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCinemaList();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎬 8082 DB에서 직접 가져온 영화관 목록</h2>

      {loading && <p>조회 중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {cinemas.length > 0 && (
        <ul>
          {cinemas.map((item, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <strong>지점 번호:</strong> {item.branchNum}<br />
              <strong>지점 이름:</strong> {item.branchName}<br />
              <strong>주소:</strong> {item.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CinemaList;