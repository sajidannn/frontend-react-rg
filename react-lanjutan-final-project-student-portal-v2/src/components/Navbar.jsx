import { Link as ChakraLink, Box, HStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box
      as="nav"
      bg="teal.500"
      color="white"
      position="fixed"
      width="100%"
      height="60px"
      px="4"
      zIndex="1000"
    >
      <HStack justifyContent="space-between" alignItems="center" height="100%">
        <Heading size="lg">
          <ChakraLink
            as={Link}
            to="/"
            data-testid="home-page"
            _hover={{ textDecoration: 'none', color: 'teal.200' }}
          >
            Student Portal
          </ChakraLink>
        </Heading>
        <HStack as="ul" spacing="24px" listStyleType="none">
          <Box as="li">
            <ChakraLink
              as={Link}
              to="/student"
              data-testid="student-page"
              _hover={{ color: 'teal.200' }}
            >
              All Student
            </ChakraLink>
          </Box>
          <Box as="li">
            <ChakraLink
              as={Link}
              to="/add"
              data-testid="add-page"
              _hover={{ color: 'teal.200' }}
            >
              Add Student
            </ChakraLink>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
