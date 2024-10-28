import { useNavigate } from 'react-router-dom';
import { Button, Box, Text } from '@chakra-ui/react';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box p="4" textAlign="center">
      <Text fontSize="2xl" mb="4">
        Page Not Found
      </Text>
      <Button colorScheme="teal" data-testid="back" onClick={handleBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default NotFound;
