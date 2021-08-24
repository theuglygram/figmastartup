import { btn, smallBold, smallText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import Macbook from "assets/images/Macbook.png";
import board from "assets/images/board.png";

const ContentCard = () => {
  return (
    <Wrapper>
      <>
        <ContentWrapper>
          <TopSection>
            <Work>Work</Work>
            <Description>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </Description>
            <Btn1> Sign Up</Btn1>
          </TopSection>
          <BottomSection>
            <Bottom src={Macbook} />
          </BottomSection>
        </ContentWrapper>
        {/* ---------design card----------------- */}
        <ContentWrapper>
          <TopSection>
            <Work>Design with real data</Work>
            <Description>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </Description>
            <Btn1> Try for free</Btn1>
          </TopSection>
          <BottomSection>
            <Bottom src={board} />
          </BottomSection>
        </ContentWrapper>
      </>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;

  place-items: center;
  max-width: 985px;
  @media only screen and (max-width: 956px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
  max-width: 476px;
  width: 100%;
  height: 620px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 10px 30px;
  margin: 40px 0;
  @media only screen and (max-width: 510px) {
    max-width: 310px;
  }
`;
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BottomSection = styled.div``;
const Bottom = styled.img`
  max-width: 400px;
  width: 100%;
`;
const Work = styled(smallBold)`
  font-size: 20px;
  background: none;
  color: #000;
  text-align: center;
  margin: 20px 0;
`;
const Description = styled(smallText)`
  background: none;
  color: #5c5c5c;
  text-align: center;
  margin: 0 0 60px;
`;
const Btn1 = styled(btn)`
  width: 157px;
  height: 52px;
  background: #4452fe;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  margin: 40px 0px;
`;

export default ContentCard;
