import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import FullScreenSection from "./components/FullScreenSection";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <body>
          <Header />
          <main>
            <FullScreenSection>
              <LandingSection />
            </FullScreenSection>
            <FullScreenSection backgroundColor="#14532d" isDarkBackground>
              <ProjectsSection />
            </FullScreenSection>
            <FullScreenSection>
              <ContactMeSection />
            </FullScreenSection>
          </main>
          <Footer />
          <Alert />
        </body>
      </AlertProvider>
    </ChakraProvider>
  );
}
export default App;