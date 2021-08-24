import Footer from "components/HomeContents/Footer";
import HeroSection1 from "components/HomeContents/HeroSection1";
import HeroSection2 from "components/HomeContents/HeroSection2";
import HeroSection3 from "components/HomeContents/HeroSection3";
import HeroSection4 from "components/HomeContents/HeroSection4";
import HeroSection5 from "components/HomeContents/HeroSection5";
import HeroSection6 from "components/HomeContents/HeroSection6";
import HeroSection7 from "components/HomeContents/HeroSection7";
import NavBar from "components/navigation/NavBar";
import React, { useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  useEffect(() => {
    document.title = "Startup | Home";
  });
  return (
    <Wrapper>
      <NavBar />
      <HeroSection1 />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <HeroSection6 />
      <HeroSection7 />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Home;
