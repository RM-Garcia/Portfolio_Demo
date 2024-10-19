import React from "react";
import { Box, VStack, Image, Heading, Text } from "@chakra-ui/react";

const LandingSection = () => {
  const greeting = "Hello, I'm .....";
  const bio1 = "I am a software developer.";
  const bio2 = "I'm working on the Meta Front-End Developer Professional Certificate.";

  return (
    <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Image src="https://i.pravatar.cc/150?img=7" borderRadius="full" />
        <Heading>{greeting}</Heading>
        <Text>{bio1}</Text>
        <Text>{bio2}</Text>
      </VStack>
    </Box>
  );
};

export default LandingSection;
