import FeaturesCard from "components/cards/FeaturesCard";
import { mediumText, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import featuresImg from "assets/images/featuresImg.png";
import ContentCard from "components/cards/ContentCard";

const HeroSection3 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Feat>Contents</Feat>
          <Description>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </Description>
        </TopSection>
        <BottomSection>
          <ContentCard />
        </BottomSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  margin: 150px auto;
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

const BottomSection = styled.div``;

export default HeroSection3;
