import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      backgroundColor="#18181b"
      color="white"
      textAlign="center"
      padding={4}
    >
      <Flex justifyContent="center" alignItems="center">
        <p>Pete • © 2022</p>
      </Flex>
    </Box>
  );
};

export default Footer;
