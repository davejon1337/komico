import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.nav`
  position : fixed;
  position: -webkit-sticky;
  top : 0;
  overflow: hidden;
  height : 70px;
  width : 100vw;
  background-color : #1D8CF8;
  display : flex;
  justify-content : space-between;
  align-items : center;
`

const NavTitleContainer = styled.div`
  margin-left : 20px;
`

const NavTitle = styled.h3`
  font-weight : 300;
  font-size : 1.4rem;
  letter-spacing : 4px;
`

const InputContainer = styled.div`
  display : flex;
  margin : 0 30px;

`

const Input = styled.input`
  padding : 5px ;
  width : 100px;
  transition : all 0.1s ease-out;

  &:focus {
    width : 200px;
    outline : none;
  }
`

const Icon = styled.i`
  padding : 10px;
  background-color : red;
  border-top-left-radius : -15px;
`
const NavList = styled.ul`
  display : flex;
  list-style : none;
  margin : 0 25px;
`

const NavItems = styled.li`
  margin : 0 10px;
  font-size : 1.5rem;
  padding : 5px;
`

const NavStyledLink = styled(NavLink)`
  border : none;
  text-decoration : none;
  color : inherit;
  padding : 10px;
`

const activeStyle = {
  borderRadius: '50%',
  background: 'red',
}

export default function Navbar() {
  return (
    <Nav >
      <NavTitleContainer>
        <NavTitle>KOMICO</NavTitle>
      </NavTitleContainer>
      <InputContainer>
        <Input type="text" placeholder="Search..." />
        <Icon className="fas fa-search"></Icon>
      </InputContainer>
      <NavList>
        <NavItems>
          <NavStyledLink exact to="/" activeStyle={activeStyle}>
            <i className="fas fa-home"></i>
          </NavStyledLink>
        </NavItems>
        <NavItems>
          <NavStyledLink exact to="/discover" activeStyle={activeStyle}>
            <i class="fas fa-compass"></i>
          </NavStyledLink>
        </NavItems>
        <NavItems>
          <NavStyledLink exact to="/about" activeStyle={activeStyle}>
            <i className="fas fa-info-circle"></i>
          </NavStyledLink>
        </NavItems>

      </NavList>
    </Nav>
  )
}
