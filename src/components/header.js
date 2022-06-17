import React from "react"
// import { Link } from "gatsby"
import { HashLink as Link } from "react-router-hash-link"
import styled, { keyframes } from "styled-components"
import { menuData } from "../data/MenuData"
import GlobalStyle from "./styles/GlobalStyles"
import BurgerMenu from "./styles/BurgerMenu"
import { BrowserRouter as Router } from "react-router-dom"

function Header() {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <Title to="/">Agnes Bistro </Title>
        <NavMenu>
          <Router>
            {menuData.map((item, index) => (
              <NavLink smooth to={item.link} key={index}>
                {item.title}
              </NavLink>
            ))}
          </Router>
        </NavMenu>
      </Nav>
      <BurgerMenu />
    </>
  )
}

export default Header

const Title = styled.h2`
  font-family: "Oleo Script Swash Caps", cursive;
  color: #fff;
  color: black;
  font-size: 2.7rem;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  z-index: 1;
  margin-left: 30px;
  @media screen and (max-width: 840px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 770px) {
    font-size: 3.3rem;
  }
  @media screen and (max-width: 530px) {
    font-size: 2.5rem;
  }
`

const Nav = styled.nav`
  height: 90px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 1rem calc((100vw - 1400px) / 2);
  z-index: 200;
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  box-shadow: 2px 7px 5px rgba(0, 0, 0, 0.2),
    0px -4px 10px rgba(255, 255, 255, 0.2);
  z-index: 1;
`

const NavLink = styled(Link)`
  color: #fff;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  width: 130px;
  justify-items: center;
  height: 100%;
  letter-spacing: 1px;
  /* text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3); */
  font-weight: 400;
  cursor: pointer;
  /* adding style */
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :after {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    display: block;
    transition: all 0.4s ease;
    bottom: 25%;
  }
  :hover::after {
    width: 110px;
    height: 3px;
    background-color: #fff;
    background-color: black;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
