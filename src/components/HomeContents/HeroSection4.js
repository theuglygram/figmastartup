import { btn, mediumText, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import itemCard from "assets/images/itemCard.png";
import tablet from "assets/images/tablet.png";
import meeting from "assets/images/meeting.png";
import shelve from "assets/images/shelve.png";
import pcCard from "assets/images/pcCard.png";
import typeset from "assets/images/typeset.png";
import camera from "assets/images/camera.png";

const HeroSection4 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Feat>Gallery</Feat>
          <Description>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </Description>
        </TopSection>
        <BottomSection>
          <ImgDiv>
            <BackImg src={itemCard} />
            <BackImg src={tablet} />
            <BackImg src={meeting} />
            <BackImg src={shelve} />
          </ImgDiv>
          <ContentDiv>
            <ImagesDiv src={pcCard} />
            <ImagesDix src={typeset} />
            <ImagesDiv src={camera} />
          </ContentDiv>
        </BottomSection>
        <See>See More</See>
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

  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
const ImgDiv = styled.div`
  max-width: 999px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  padding: 0 20px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const ImagesDiv = styled.img`
  max-width: 395px;
  width: 100%;
  height: 285px;
`;
const ImagesDix = styled.img`
  max-width: 225px;
  width: 100%;
  height: 285px;
  margin: 0 30px;
`;
const ContentDiv = styled.div`
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  padding: 0 20px;
  margin: 0 auto;
  gap: 30px;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const BackImg = styled.img`
  max-width: 724px;
  width: 100%;
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
export default HeroSection4;
