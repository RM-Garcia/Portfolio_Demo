import React, { useRef, useEffect, useState } from "react";
import { Box, HStack, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faFacebook, link: "https://facebook.com" },
  { icon: faTwitter, link: "https://twitter.com" },
  { icon: faLinkedin, link: "https://linkedin.com" },
  { icon: faGithub, link: "https://github.com" },
];

const Header = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      setShow(scrollY < lastScrollY.current || scrollY < 100);
      lastScrollY.current = scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box 
      transform={show ? "translateY(0)" : "translateY(-200px)"} 
      transition="transform 0.3s ease" 
      bg="black" 
      p={4} 
      w="100%"
      position="fixed" 
      zIndex="1000" 
      top={0} 
      left={0} 
    >
      <Flex justify="space-between" align="center" color="white">
        <HStack spacing={4}>
          {socials.map((social, index) => (
            <a href={social.link} key={index} aria-label={`Link to ${social.link}`}>
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </HStack>
        <HStack spacing={4} marginLeft="auto">
          <a href="#projects-section" onClick={handleClick}>
            Projects
          </a>
          <a href="#contactme-section" onClick={handleClick}>
            Contact Me
          </a>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
