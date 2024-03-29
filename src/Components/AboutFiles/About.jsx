import React from "react";
import HeroImg from "../../Images/portfolio-pic1.jpg";
import Land from "../../Images/land.png";

// import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
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
          property: "opacity", // Apply opacity transition
        },
      ],
    },
  ];
  return (
    <div id="about">
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
        <HeroContainer>
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
    </div>
  );
};

export default About;
