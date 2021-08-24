import React from "react";
import styled from "styled-components";
import restaurantmenu from "assets/icons/restaurantmenu.svg";
import inclusive from "assets/icons/inclusive.svg";
import Vector from "assets/icons/Vector.svg";

const FeaturesCard = () => {
  return (
    <Wrapper>
      <FeaturesWrapper>
        <Features>
          <TopText>
            <Img src={restaurantmenu} /> A single source of truth
          </TopText>
          <Description>
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </Description>
        </Features>
        <Features>
          <TopText>
            <Img src={Vector} /> Intuitive interface
          </TopText>
          <Description>
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </Description>
        </Features>
        <Features>
          <TopText>
            <Img src={inclusive} />
            Or with rules
          </TopText>
          <Description>
            When you add work to your Slate calendar we automatically calculate
            useful insights
          </Description>
        </Features>
      </FeaturesWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const FeaturesWrapper = styled.div``;
const Features = styled.div`
  width: 100%;
  max-width: 269px;
  height: 196px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 25px 0px;
`;
const TopText = styled.div`
  max-width: 204.49px;
  height: 80px;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  margin-right: 15px;
`;
const Description = styled.div``;
export default FeaturesCard;
