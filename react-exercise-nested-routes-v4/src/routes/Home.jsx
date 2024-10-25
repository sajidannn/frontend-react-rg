import React from 'react';
import { Link } from 'react-router-dom';
import people from '../assets/people.jpeg';
import planets from '../assets/planets.jpeg';
import movies from '../assets/movies.jpeg';
import { Container } from '@chakra-ui/react';
import { Card, Image, SimpleGrid, Text, CardBody } from '@chakra-ui/react';

const Home = () => {
  return (
    //  Align the Container to middle vertically
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200}>
        {/* Card for People */}
        <Card>
          <Link to="/star-wars/people">
            <Image src={people} alt="People" />
            <CardBody>
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                People
              </Text>
            </CardBody>
          </Link>
        </Card>
        {/* Card for Planets */}
        <Card>
          <Link to="/star-wars/planets">
            <Image src={planets} alt="Planets" />
            <CardBody>
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                Planets
              </Text>
            </CardBody>
          </Link>
        </Card>
        {/* Card for Movies */}
        <Card>
          <Link to="/star-wars/movies">
            <Image src={movies} alt="Movies" />
            <CardBody>
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                Movies
              </Text>
            </CardBody>
          </Link>
        </Card>{' '}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
