import { useEffect, useState } from 'react';
const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.py4e.com/api/people')
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          <h2>{person.name}</h2>
          <h3>Gender:</h3>
          <p>{person.gender}</p>
          <h3>Birth Year:</h3>
          <p>{person.birth_year}</p>
          <h3>Mass:</h3>
          <p>{person.mass}</p>
          <h3>Height:</h3>
          <p>{person.height}</p>
          <h3>Eye Color:</h3>
          <p>{person.eye_color}</p>
        </div>
      ))}
    </div>
  );
};

export default People;
