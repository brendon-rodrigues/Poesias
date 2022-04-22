import styled from "styled-components";
import { Component } from "react";
const Nav = styled.nav`
  width: 100%;
  height: 5vh;
  background: #b8fff9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    background: #b8fff9;
    border: none;
    color: #000;
    margin: 5px 20px;
    font-size: 20px;
    font-weight: bold;
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
`;

export default class Footer extends Component {
  render() {
    return (
      <Nav>
        <button> Topo </button>
        <h4> Por: Brendon Rodrigues </h4>
      </Nav>
    );
  }
}
