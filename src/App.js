import React, { useState } from "react";
import './App.css';
import HomePage from "./Pages/HomePage";
import MainPage from "./Pages/MainPage";

const App = () => {
  // Estado para controlar qual tela exibir
  const [isHomePage, setIsHomePage] = useState(true);

  // Função para mudar para a MainPage
  const goToMainPage = () => {
    setIsHomePage(false);
  };

  return (
    <div className="App">
      {isHomePage ? (
        <HomePage goToMainPage={goToMainPage} /> // Exibe a HomePage
      ) : (
        <MainPage /> // Exibe a MainPage
      )}
    </div>
  );
};

export default App;