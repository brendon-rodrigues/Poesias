import styled from "styled-components";
import Menu from "./menu.png";
import { Component } from "react";
import Indice from "./indice";
import Spotify from "./spotify";
const Nav = styled.nav`
  width: 100%;
  height: 5vh;
  background: #42c2ff;
  display: flex;
  justify-content: flex-start;
  button {
    background: #42c2ff;
    border: none;
    color: #fff;
    margin: 5px 20px;
    font-size: 20px;
  }
  ul {
    background: #000;
    color: #fff;
    margin-right: 50px;
    z-index: 1;
    font-weight: bold;
    position: relative;
    top: 30px;
    right: 50px;
  }
  img {
    width: 30px;
    height: 25px;
    position: relative;
  }
`;

export default class Navbar extends Component {
  render() {
    return <Nav></Nav>;
  }
}
