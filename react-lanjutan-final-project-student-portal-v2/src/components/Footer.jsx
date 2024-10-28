import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      className="footer"
      bg="gray.700"
      color="white"
      textAlign="center"
      width="100%"
      paddingY="2"
      marginTop="auto"
    >
      <Text className="studentName">Djarot Purnomo</Text> -
      <Text className="studentId">FE001</Text>
    </Box>
  );
}

export default Footer;
