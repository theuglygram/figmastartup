import FeaturesCard from "components/cards/FeaturesCard";
import { mediumText, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import featuresImg from "assets/images/featuresImg.png";

const HeroSection2 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Feat>FEATURES</Feat>
          <Description>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </Description>
        </TopSection>
        <BottomSection>
          <ImgDiv>
            <BackImg src={featuresImg} />
          </ImgDiv>
          <ContentDiv>
            <FeaturesCard />
          </ContentDiv>
        </BottomSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div``;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
const ImgDiv = styled.div``;
const ContentDiv = styled.div``;
const BackImg = styled.img`
  max-width: 724px;
  width: 100%;
`;
export default HeroSection2;
