import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  a:link {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
}

a:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
}
`;

const PageWrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 78px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}

export default Layout;
