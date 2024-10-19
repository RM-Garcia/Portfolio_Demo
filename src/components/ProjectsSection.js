import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware.",
      getImageSrc: () => require("../images/photo1.jpg"),
      link: "https://example.com/react-space",
      technologies: ["React", "Redux", "AR.js"],
      status: "Completed",
      date: "2023-05-01",
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualization support, native animations at 60 FPS, and fully implemented in JS land 🔥️.",
      getImageSrc: () => require("../images/photo2.jpg"),
      link: "https://example.com/react-infinite-scroll",
      technologies: ["React", "JavaScript", "CSS"],
      status: "In Development",
      date: "2023-06-15",
    },
    {
      title: "Photo Gallery",
      description:
        "A one-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income.",
      getImageSrc: () => require("../images/photo3.jpg"),
      link: "https://example.com/photo-gallery",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      date: "2023-07-20",
    },
    {
      title: "Event Planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps.",
      getImageSrc: () => require("../images/photo4.jpg"),
      link: "https://example.com/event-planner",
      technologies: ["React Native", "Firebase"],
      status: "Completed",
      date: "2023-08-30",
    },
  ];

const ProjectsSection = () => {
  return (
      <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        className="projects-grid" // Add this class
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            project={{
              ...project,
              image: project.getImageSrc(),
            }}
            className="card" // Add this class
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};
  
export default ProjectsSection;