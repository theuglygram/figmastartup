import React from "react";
import styled from "styled-components";
import heroChart from "assets/images/heroChart.png";
import { btn, largeText, smallText } from "components/styles/GlobalStyles";

const HeroSection1 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopSection>
          <Head>Work at the speed of thought</Head>
          <Description>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </Description>
          <ButtonHolder>
            <Btn1>Try for free</Btn1>
            <Btn2>Learn More</Btn2>
          </ButtonHolder>
        </TopSection>

        <BottomSection>
          <Back src={heroChart} />
        </BottomSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 85px 0;
`;

const TopSection = styled.div`
  max-width: 729px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
`;
const Head = styled(largeText)`
  text-align: center;
  margin: 0 0 30px;
`;
const Description = styled(smallText)`
  text-align: center;
  margin: 0 0 85px;
`;
const ButtonHolder = styled.div`
  margin: 0 0 35px;
  text-align: center;
`;
const Btn1 = styled(btn)`
  background: #4452fe;
  margin-top: 20px;
`;
const Btn2 = styled(btn)`
  border: 1px solid #ffffff;
  margin-top: 20px;
`;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Back = styled.img`
  max-width: 1552.02px;
  max-height: 841px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export default HeroSection1;
