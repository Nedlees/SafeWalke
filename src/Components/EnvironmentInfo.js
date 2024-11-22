import React, { useState, useEffect } from "react";

const EnvironmentInfo = ({ location }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (location) {
      fetchEnvironmentInfo(location);
    }
  }, [location]);

  const fetchEnvironmentInfo = async ([latitude, longitude]) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();

      const addressInfo = data.address;
      const formattedInfo = [];

      if (addressInfo.road) formattedInfo.push(`Rua: ${addressInfo.road}`);
      if (addressInfo.neighbourhood) formattedInfo.push(`Bairro: ${addressInfo.neighbourhood}`);
      if (addressInfo.city) formattedInfo.push(`Cidade: ${addressInfo.city}`);
      if (addressInfo.coutry) formattedInfo.push(`País: ${addressInfo.country}`);

      setInfo(formattedInfo);
    } catch (error) {
      console.error('Erro ao buscar informações do ambiente', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h3>Informações do Ambiente</h3>
      {loading ? (
        <p>Carregando informações...</p>
      ) : (
        <ul>
          {info.length > 0 ? (
            info.map((iten, index) => <li key={index}></li>)
          ) : (
            <p>Nenhuma Informação disponivel.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default EnvironmentInfo;