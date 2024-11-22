import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Certifique-se de que esse arquivo exista ou remova se não usar
import App from './App';  // Se você estiver usando 'App.js', caso contrário, use o nome correto do componente
import { BrowserRouter as Router } from 'react-router-dom'; // Para navegação, se necessário

// Renderiza o componente principal 'App' ou 'MainPage' no DOM
ReactDOM.render(
  <Router>
    <App /> {/* Se você estiver usando MainPage diretamente, substitua 'App' por 'MainPage' */}
  </Router>,
  document.getElementById('root')
);