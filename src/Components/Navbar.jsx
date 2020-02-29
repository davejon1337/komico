import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  /* left: 0; */
  overflow: hidden;
  height: 70px;
  width: 100vw;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
  z-index: 1;
`;

const NavTitleContainer = styled.div`
  padding-left: 20px;
  display: flex;
`;

const NavTitle = styled.h3`
  font-weight: 300;
  font-size: 1.4rem;
  letter-spacing: 4px;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;

  padding: 0 20px;
`;

const Input = styled.input`
  z-index: -1;
  padding: 5px;
  width: 0%;
  /* display: none; */
  transition: all 0.7s ease-in;

  &:focus {
    width: 200px;
    outline: none;
  }
`;

const Icon = styled.i`
  padding: 10px;
  background-color: red;
  border-top-left-radius: -15px;
`;
const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 3px;
`;

const NavItems = styled.li`
  font-size: 0.9rem;
  /* margin: 0 5px; */
  padding: 5px;
`;

const NavStyledLink = styled(NavLink)`
  border: none;
  text-decoration: none;
  color: inherit;
  padding: 10px;
`;

const activeStyle = {
  borderRadius: "50%",
  background: "red"
};

export default function Navbar() {
  const [inputShow, setInputShow] = useState(false);
  const [isAbove, setAbove] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = e => {
    if (e.target.documentElement.scrollTop >= 200) {
      setAbove(true);
    } else {
      setAbove(false);
    }
  };

  return (
    <Nav
      style={{
        backgroundColor: `${isAbove ? "rgba(0,0,0,0.7)" : "transparent"}`
      }}
    >
      <NavTitleContainer>
        <NavTitle>KOMICO</NavTitle>
        <NavList>
          <NavItems>
            <NavStyledLink to="/">Home</NavStyledLink>
          </NavItems>
          <NavItems>
            <NavStyledLink to="/">TV Shows</NavStyledLink>
          </NavItems>
          <NavItems>
            <NavStyledLink to="/">Movies</NavStyledLink>
          </NavItems>
          <NavItems>
            <NavStyledLink to="/">Latest</NavStyledLink>
          </NavItems>
          <NavItems>
            <NavStyledLink to="/">Discover</NavStyledLink>
          </NavItems>
        </NavList>
      </NavTitleContainer>
      <NavList>
        <InputContainer>
          <Input
            type="text"
            style={{
              zIndex: `${inputShow ? 1 : -1}`,
              width: `${inputShow ? "200px" : "10px"}`
            }}
          />
          <Icon
            className="fas fa-search"
            onClick={() => setInputShow(!inputShow)}
          ></Icon>
        </InputContainer>
      </NavList>
    </Nav>
  );
}
