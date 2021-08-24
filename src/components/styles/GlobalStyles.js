import styled from "styled-components";

export const smallText = styled.p`
  font-family: Graphik Regular;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.20000000298023224px;
`;

export const smallBold = styled.p`
  font-family: Graphik Medium;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.20000000298023224px;
`;

export const mediumText = styled.p`
  font-family: Graphik Regular;
  font-size: 52px;
  font-style: normal;
  font-weight: 400;
  line-height: 62px;
  letter-spacing: 0.20000000298023224px;
`;

export const largeText = styled.h2`
  font-family: Graphik Medium;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: 88px;
  letter-spacing: 0.20000000298023224px;
  @media only screen and (max-width: 800px) {
    font-size: 45px;
    line-height: 1.4;
  }
`;

export const btn = styled.button`
  background: none;
  color: #fff;
  font-family: Graphik Medium;
  border: none;
  outline: none;
  width: 178px;
  height: 65px;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  flex: none;
  flex-grow: 0;
  margin: 0px 35px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
`;
