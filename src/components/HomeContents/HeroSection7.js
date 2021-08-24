import { btn, mediumText } from "components/styles/GlobalStyles";
import React from "react";
import styled from "styled-components";
import prototyping from "assets/images/prototyping.png";

const HeroSection7 = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <RightSection>
          <Open>OpenType features and Variable fonts</Open>
          <Btn1>Try For Free</Btn1>
        </RightSection>
        <LeftSection>
          <Pro src={prototyping} />
        </LeftSection>
      </HeroWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 0 20px;
`;
const HeroWrapper = styled.div`
  max-width: 1219px;
  width: 100%;
  min-height: 370px;
  height: 100%;
  background: #343434;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  border-radius: 33px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 50px auto;
  place-items: center;
  padding: 40px 20px;
  gap: 30px;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const RightSection = styled.div`
  max-width: 432px;
  width: 100%;
`;
const Open = styled(mediumText)`
  background: none;
  font-size: 45px;
  margin: 0 0 40px;
`;
const Btn1 = styled(btn)`
  background: #4452fe;
  margin: unset;
`;
const LeftSection = styled.div``;
const Pro = styled.img`
  max-width: 585px;
  width: 100%;
  height: 300px;
`;
export default HeroSection7;
