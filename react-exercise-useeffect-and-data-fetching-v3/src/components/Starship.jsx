import React, { useState, useEffect } from 'react';

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.py4e.com/api/starships')
      .then((response) => response.json())
      .then((data) => {
        setStarships(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Starships</h2>
      {starships.map((starship, index) => (
        <div key={index}>
          <h2>{starship.name}</h2>
          <h3>Model:</h3>
          <p>{starship.model}</p>
          <h3>Manufacturer:</h3>
          <p>{starship.manufacturer}</p>
          <h3>Crew:</h3>
          <p>{starship.crew}</p>
          <h3>Passengers:</h3>
          <p>{starship.passengers}</p>
          <h3>Cargo Capacity:</h3>
          <p>{starship.cargo_capacity}</p>
          <h3>Starship Class:</h3>
          <p>{starship.starship_class}</p>
        </div>
      ))}
    </div>
  );
};

export default Starships;
