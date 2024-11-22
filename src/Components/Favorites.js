import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState('');

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = () => {
    if (newFavorite.trim()) {
      setFavorites([...favorites, newFavorite]);
      setNewFavorite('');
    }
  };

  return (
    <div>
      <input 
      type="text"
      value={newFavorite}
      onChange={(e) => setNewFavorite(e.target.value)}
      placeholder="Adicionar Novo Local"
      />
      <button onClick={addFavorite}>Adicionar</button>

      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;