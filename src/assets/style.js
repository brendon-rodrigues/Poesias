import styled from "styled-components";
export const Nav = styled.nav`
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

export const TextBox = styled.div`
  width: 90%;
  text-align: justify;
  border-radius: 15px;
  margin: 10px 18px;
  padding: 15px;
  background: #effffd;
  line-height: 1.8;
`;
