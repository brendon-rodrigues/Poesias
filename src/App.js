import React, { Component } from "react";

import "./styles.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Main from "./Main";
import Footer from "./footer";

import Navbar from "./NavBar";
const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  

}
`;
const Body = styled.body`
  background: #85f4ff;
`;

export default class App extends Component {
  render() {
    return (
      <Body>
        <GlobalStyle />
        <Navbar />
        <Main />
        <Footer />
      </Body>
    );
  }
}
