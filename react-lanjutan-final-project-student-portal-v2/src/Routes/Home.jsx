import { useNavigate } from 'react-router-dom';
import { Button, Box, Text, VStack } from '@chakra-ui/react';
import backgroundImage from './Home.jpeg'; // Ganti dengan path gambar Anda

const Home = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/student');
  };

  return (
    <Box
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="teal.900"
        opacity="0.7"
        zIndex="0"
      />
      <VStack spacing={4} zIndex="1" textAlign="center">
        <Text fontSize="2xl" color="white">
          Studi Independen <br /> Kampus Merdeka
        </Text>
        <Text fontSize="lg" color="teal.300">
          by RUANGGURU
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          Student Portal
        </Text>
        <Button
          data-testid="student-btn"
          onClick={handleButton}
          colorScheme="teal"
          variant="solid"
          size="lg"
        >
          All Student
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
