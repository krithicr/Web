import React from "react";
import {
  HeroContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./AboutStyles";

import Typewriter from "typewriter-effect";
import { Bio } from "../../Data/Constants";
import Plx from "react-plx";

const About = () => {
  const parallaxData = [
    {
      start: 0, // Start when the component enters the viewport
      end: 900, // End when the component exits the viewport
      easing: "easeOut", // Easing function for smooth transition
      properties: [
        {
          startValue: 1, // Start value for the opacity property (fully visible)
          endValue: 0, // End value for the opacity property (fully transparent)
          property: "opacity",
        },
      ],
    },
  ];
  return (
    // <div style={{ width: "100%" }}>
    <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
      <HeroContainer id="about">
        {/* <HeroBg>
          <HeroBgAnimation />
        </HeroBg> */}
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I am {Bio.name}</Title>
            <TextLoop>
              a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            {/* <Img
              src={Land}
              alt="hero-image"
              style={{ backgroundColor: "black" }}
            /> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </Plx>
    // </div>
  );
};

export default About;
