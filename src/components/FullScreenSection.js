import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * FullScreenSection component that fills the viewport.
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor || "transparent"} // Default to transparent if no background is provided
      color={isDarkBackground ? "white" : "black"}
      minHeight="100vh" // Ensure it takes the full height of the viewport
      padding={8} // Add padding for spacing
      spacing={8} // Space between children
      {...boxProps}
    >
      {children}
    </VStack>
  );
};

export default FullScreenSection;