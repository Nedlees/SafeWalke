import React, { useEffect } from 'react';

const HomePage = ({ goToMainPage }) => {
  useEffect(() => {
    // Texto completo para ser narrado
    const texto = "Bem-vindo ao nosso aplicativo de acessibilidade! Este aplicativo foi desenvolvido para ajudar na navegação segura e acessível. Através de informações em tempo real sobre o ambiente e navegação por voz, você pode se locomover com mais segurança e facilidade.";

    // Inicializa a voz e a narração do texto
    const speech = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(speech);

    // Garantir que o texto esteja narrado assim que o componente carregar
  }, []); // Executa apenas uma vez ao carregar o componente

  return (
    <div className="home-page">
      <h1>Bem-vindo ao nosso aplicativo!</h1>
      <p>Este aplicativo foi desenvolvido para ajudar na navegação segura e acessível.</p>
      <p>Através de informações em tempo real sobre o ambiente e navegação por voz, você pode se locomover com mais segurança e facilidade.</p>
      <button onClick={goToMainPage}>Ir para a página principal</button> {/* Muda o estado para exibir a MainPage */}
    </div>
  );
};

export default HomePage;