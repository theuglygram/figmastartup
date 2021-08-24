import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logodark from "assets/logos/logodark.svg";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const toggleHamburger = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    setMenu(false);
  }, [location]);
  return (
    <Wrapper>
      <NavHolder>
        <LogoHolder>
          <Logo src={logodark} />
        </LogoHolder>
        <LinkHolder toggle={menu}>
          <Links>Home</Links>
          <Links>Product</Links>
          <Links>About</Links>
          <Links>Contact</Links>
        </LinkHolder>
        <LoginHolder>
          <Login>Login</Login>
        </LoginHolder>
        <Hamburger onClick={toggleHamburger}>
          <Menu1 toggle={menu} />
          <Menu2 toggle={menu} />
          <Menu3 toggle={menu} />
        </Hamburger>
      </NavHolder>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const NavHolder = styled.nav`
  height: 119px;
  max-width: 1097px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const LogoHolder = styled.div``;
const Logo = styled.img``;
const LinkHolder = styled.ul`
  height: 44px;
  width: 393px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 800px) {
    /* display: none; */
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    height: 100vh;
    max-width: 100vw;
    width: 100%;
    background: #181818;
    z-index: 3;
    padding: 40px 24px;
    transition: 0.9s ease-in;
    -o-transition: 0.9s ease-in;
    -moz-transition: 0.9s ease-in;
    transform: ${(props) =>
      props.toggle ? "translateY(100px)" : "translateY(-1000px)"};
  }
`;
const Links = styled.li`
  list-style: none;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
  }
`;
const LoginHolder = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  /* shadow */
  filter: drop-shadow(0px 4px 31px rgba(0, 0, 0, 0.15));
  width: 139px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;
const Login = styled.div``;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 40px;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const Menu1 = styled.div`
  height: 2px;
  width: 30px;
  background: #fff;
  margin: 3px;
  cursor: pointer;
  position: absolute;
  right: 0;
  transform: ${(props) =>
    props.toggle ? "rotate(-45deg) translate(-5px,6px)" : "rotate(0)"};
  top: 0px;
`;
const Menu2 = styled.div`
  height: 2px;
  width: 25px;
  background: #fff;
  position: absolute;
  right: 0;
  cursor: pointer;
  top: 10px;
  margin: 3px;
  transition: 0.9s ease-in;
  -o-transition: 0.9s ease-in;
  -moz-transition: 0.9s ease-in;
  display: ${(props) => (props.toggle ? "none" : "flex")};
`;
const Menu3 = styled.div`
  height: 2px;
  width: ${(props) => (props.toggle ? "30px" : "20px")};
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 18px;
  background: #fff;
  margin: 3px;
  transform: ${(props) =>
    props.toggle ? "rotate(45deg) translate(-5px,-6px)" : "rotate(0)"};
`;
export default NavBar;
