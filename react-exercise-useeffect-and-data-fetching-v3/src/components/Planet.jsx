import { useEffect, useState } from 'react';
const Planet = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.py4e.com/api/planets')
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {planets.map((planet, index) => (
        <div key={index}>
          <h2>{planet.name}</h2>
          <h3>Rotation Period:</h3>
          <p>{planet.rotation_period}</p>
          <h3>Orbital Period:</h3>
          <p>{planet.orbital_period}</p>
          <h3>Terrain:</h3>
          <p>{planet.terrain}</p>
          <h3>Population:</h3>
          <p>{planet.population}</p>
          <h3>Climate:</h3>
          <p>{planet.climate}</p>
        </div>
      ))}
    </div>
  );
};

export default Planet;
