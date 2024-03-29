import React from "react";
import styled from "styled-components";
import Navbar from "./NavbarFiles/Navbar";
import About from "./AboutFiles/About";
import Skills from "./skillsFiles/Skills";
import Footer from "./FooterFiles/Footer";
import Projects from "./ProjectFiles/Project";
import Experience from "./ExperienceFiles/Experience";
import Contact from "./ContactFiles/Contact";

const Home = styled.div`
  width: 80%;
  height: 100% !important;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
`;

const FullPage = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

function HomePage() {
  return (
    <FullPage>
      <Navbar />
      <Home>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </Home>
      <Footer />
    </FullPage>
  );
}

export default HomePage;
