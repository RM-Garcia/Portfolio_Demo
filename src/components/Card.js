import React from "react";
import { HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ project }) => {
  return (
    <VStack borderWidth="1px" borderRadius="lg" padding="4" alignItems="flex-start">
      <Image src={project.image} alt={project.title} />
      <Heading size="md">{project.title}</Heading>
      <Text>{project.description}</Text>
      <HStack spacing={2}>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
