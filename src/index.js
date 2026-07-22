import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Uygulamanızın performansını ölçmek için sonuçları kaydeden bir fonksiyon
// (örneğin reportWebVitals(console.log)) iletebilir veya sonuçları bir analiz
// uç noktasına gönderebilirsiniz. Daha fazla bilgi: https://bit.ly/CRA-vitals
reportWebVitals();
