import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate();

useEffect(() => {
  const timeout = setTimeout(() => {
  navigate('/');
}, 2000);

return () => clearTimeout(timeout);
}, [navigate]);

  return (
    <div>
      <h2>Страница не найдена</h2>
      <p>Вы будете перенаправлены на главную страницу...</p>
    </div>
  )
}

export default NotFoundPage;
