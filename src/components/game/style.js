import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  color: #f7d02a;
`;

export const P = styled.p `
color: #fff;
font-size: 1.5em;
line-height: 1.1;
margin-bottom: 20px;
`

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff12;
  backdrop-filter: blur(6px);
`;

export const Content = styled.div`
  width: 60%;
  padding: 50px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #eced1540;
  box-shadow: 0px 0px 24px -3px rgb(255 255 255 / 20%);
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-size: 1.5em;
  color: #fff;

  div {
    display: flex;
    gap: 30px;
    margin-top: 10px;
  }
`;

export const Btn = styled.button`
  background-color: #f7d02a;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  
  font-size: 20px;
  font-weight: bold;
`;
