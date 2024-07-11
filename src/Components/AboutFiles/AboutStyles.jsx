import styled from "styled-components";
import _default from "../../Utils/Default";
import backgroundImage from "../../Images/bg.jpg";

export const HeroContainer = styled.div`
  min-height: 100vh;
  // background: ${({ theme }) => theme.card_light};
  background-image: url(${backgroundImage});
  box-shadow: inset 0px 0px 50px 50px #191924;
  background-size: cover;
  margin-top: -10px;
  background-position: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;

  // margin-bottom: 35px;
  // padding: 50px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    margin: 0px;
    min-width: 330px;
    // left: -20px;
    // width: 100%;
    // align-items: center;
    justify-content: center;
    box-shadow: inset 0px 0px 0px 0px #191924;
    background-repeat: no-repeat;
    background-size: 400px 300px;
    background-position: top;
    padding: 32px 0px;
  }
  z-index: 1;

  // clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  opacity: 0.4;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  // top: 18%;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  opacity: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 10%;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  object-fit:cover;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  // border: 2px solid ${({ theme }) => theme.primary};
  box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }  

  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
    
  }

  @media (max-width: 640px) {
    max-width: 250px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 46px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    position: relative;
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 2px;
    top: -40px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    position: relative;
    font-size: 22px;
    line-height: 20px;
    margin-bottom: 5px;
    top: -40px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    width: 100%;
    font-size: 16px;
    line-height: 32px;
    position: relative;
    top: -20px;
  }
`;

export const ResumeButton = styled.a`
    border: 1px solid #AAA6C3;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 90%;
    max-width: 200px;
    text-align: center;
    padding: 16px 0;
    color: whitesmoke;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    // background-color: Transparent;
    // background: -webkit-linear-gradient(0deg, #3224b0 0%, #be5ede 100%);
    // background: hsla(271, 100%, 50%, 1);
    // background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;


    &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }
    
     &.active {
    background-color: #3224b0; 
    color: #fff; 
  }
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
        
    } 

`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
