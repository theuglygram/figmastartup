import { btn, mediumText, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import airbnb from "assets/logos/airbnb.svg";
import apple from "assets/logos/apple.svg";
import androidicon from "assets/logos/androidicon.svg";
import basecamp from "assets/logos/basecamp.svg";
import apiary from "assets/logos/apiary.svg";
import ibm from "assets/logos/ibm.svg";

const HeroSection5 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Feat>Partners</Feat>
          <Description>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </Description>
        </TopSection>
        <BottomSection>
          <ImgDiv>
            <BackImg src={airbnb} />
            <BackImg src={apple} />
            <BackImg src={androidicon} />
            <BackImg src={basecamp} />
            <BackImg src={apiary} />
            <BackImg src={ibm} />
          </ImgDiv>
        </BottomSection>
        <See>All Partners</See>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  margin: 150px 0;
`;
const TopSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Feat = styled(mediumText)`
  text-align: center;
  margin: 0 0 30px;
`;
const Description = styled(smallText)`
  text-align: center;
  margin: 0 0 30px;
`;

const BottomSection = styled.div`
  max-width: 1100px;
  width: 100%;

  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
const ImgDiv = styled.div`
  max-width: 830px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  padding: 0 20px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const BackImg = styled.img`
  max-width: 60px;
  height: 60px;
  width: 100%;
  margin: 30px 0;
`;
const See = styled(btn)`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;
  width: 159px;
  height: 52px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 31px rgba(0, 0, 0, 0.15));
  margin: 45px auto;
`;
export default HeroSection5;
