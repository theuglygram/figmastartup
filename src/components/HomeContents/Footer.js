import React from "react";
import styled from "styled-components";
import map from "assets/icons/map.svg";
import phoneandroid from "assets/icons/phoneandroid.svg";
import facebook from "assets/icons/facebook.svg";
import inkedin from "assets/icons/inkedin.svg";
import twitter from "assets/icons/twitter.svg";
const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <FingertipsSection>
          <Head>Fingertips</Head>
          <Links>Home</Links>
          <Links>Example</Links>
          <Links>Pricing</Links>
          <Links>Update</Links>
        </FingertipsSection>
        <ResourcesSection>
          <Head>Resources</Head>
          <Links>Home</Links>
          <Links>Example</Links>
          <Links>Pricing</Links>
          <Links>Update</Links>
        </ResourcesSection>
        <AboutSection>
          <Head>About</Head>
          <Links>Home</Links>
          <Links>Example</Links>
          <Links>Pricing</Links>
          <Links>Update</Links>
        </AboutSection>
        <Section>
          <Location>
            <Icon src={map} /> 7480 Mockingbird Hill undefined
          </Location>
          <Location>
            <Icon src={phoneandroid} /> (239) 555-0108
          </Location>
          <SocialIcons>
            <Icons src={facebook} />
            <Icons src={inkedin} />
            <Icons src={twitter} />
          </SocialIcons>
        </Section>
      </FooterWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  @media only screen and (max-width: 720px){
      
  grid-template-columns: repeat(2, 1fr);
    place-items: unset;
     padding: 0 50px;
  }
  @media only screen and (max-width: 500px){
      
  grid-template-columns: 1fr;
    place-items: unset;
     padding: 0 100px;
  }
}
`;
const FingertipsSection = styled.div`
  margin: 30px 0 0;
`;
const Head = styled.p`
  font-size: 20px;
  margin: 0 0 40px;
`;
const Links = styled.p`
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
`;
const ResourcesSection = styled.div`
  margin: 30px 0 0;
`;
const AboutSection = styled.div`
  margin: 30px 0 0;
`;
const Section = styled.div`
  margin: 30px 0 0;
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
`;
const SocialIcons = styled.div``;
const Icon = styled.img`
  margin-right: 10px;
`;
const Icons = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;
`;
export default Footer;
