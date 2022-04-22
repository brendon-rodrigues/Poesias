import { Component } from "react";

import styled from "styled-components";

const IndiceStyle = styled.ul`
  margin: 10px;
`;

export default class Indice extends Component {
  state = {
    indiceMenu: false
  };

  ativarIndice = () => {
    this.setState({
      indiceMenu: !this.state.indiceMenu
    });
  };

  render() {
    return (
      <>
        <IndiceStyle>
          <h3 onTouchStart={this.ativarIndice}>Índice</h3>
        </IndiceStyle>
        {this.state.indiceMenu && (
          <IndiceStyle>
            <li> Encontros e Desencontros </li>
            <li> Sonhos </li>
            <li> Ensaio sobre a solidão </li>
            <li> Cotidiano </li>
            <li> Ar</li>
            <li> Frank Ocean Tribute </li>
            <li> Carta para um ser divino </li>
          </IndiceStyle>
        )}
      </>
    );
  }
}
