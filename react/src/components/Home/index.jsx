import React from 'react';

/**
 * Главная страница приложения.
 * Отображает простой текст "Привет, Мир!".
 */
export const Home = () => {
  return (
    <div data-easytag="id1-react/src/components/Home/index.jsx">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}>
        Привет, Мир!
      </div>
    </div>
  );
};
