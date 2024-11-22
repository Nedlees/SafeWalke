import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// Ícone personalizado para o marcador
const markerIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // URL de um marcador com ponta
  iconSize: [30, 40], // Largura e altura do ícone
  iconAnchor: [15, 40], // Posição do "ponto" do ícone
  popupAnchor: [0, -40], // Posição do popup em relação ao ícone
});

const MapComponent = ({ onLocationChange }) => {
  const [location, setLocation] = useState(null); // Localização inicial

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = [position.coords.latitude, position.coords.longitude];
          setLocation(newLocation); // Atualiza o estado com a localização
          if (onLocationChange) {
            onLocationChange(newLocation); // Passa a localização para o callback
          }
        },
        (error) => {
          console.error("Erro ao obter a localização:", error);
          alert("Não foi possível obter sua localização.");
        }
      );
    } else {
      alert('Geolocalização não é suportada neste navegador.');
    }
  }, []);

  if (!location) {
    return <p>Carregando localização...</p>; // Mensagem enquanto a localização está sendo carregada
  }

  return (
    <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={location} icon={markerIcon}>
        <Popup>Você está aqui!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
