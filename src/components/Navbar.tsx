import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.header`
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;
const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
`;
const NavLinksWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const NavLink = styled.p`
  color: blue;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavLinksWrapper>
        <Link href="/">
          <NavLink>HOME</NavLink>
        </Link>
        <Link href="/projects">
          <NavLink>PROJECTS</NavLink>
        </Link>
      </NavLinksWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
