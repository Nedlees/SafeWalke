import React, { useState } from "react";
import MapComponent from "../Components/MapComponent";
import Favorites from "../Components/Favorites";
import { useSpeechRecognition } from "react-speech-recognition";
import EnvironmentInfo from "../Components/EnvironmentInfo";

const MainPage = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [ message, setMessage ] = useState('');
  const [location, setLocation] = useState(null);

  const handleVoiceCommand = () => {
    if (transcript.includes("Iniciar Navegação")) {
      setMessage("Iniciar Navegação...");
    } else if (transcript.includes("Mostrar favoritos")) {
      setMessage("Aqui estão os seus locais favoritos!");
    } else if (transcript.includes("Adicionar Favorito")) {
      setMessage ("Diga o nome do local que deseja adicionar.");
    } else {
      setMessage ("Comando não reconhecido. Tente novamente.");
    }
    resetTranscript();
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  }

  return (
    <div>
      <h1>Página Principal</h1>
      <button onClick={handleVoiceCommand}>Comando de Voz</button>
      <p>Comando Reconhecido: {transcript}</p>
      <p>{message}</p>

      <h2>Mapa</h2>
      <MapComponent onLocationChange={handleLocationChange} />

      <h2>Informações do Ambiente</h2>
      {location && <EnvironmentInfo location={location} />}
      
      <h2>Locais Favoritos</h2>
      <Favorites />
    </div>
  );
};

export default MainPage;