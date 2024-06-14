import styled from "styled-components";

export const Timer = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  background: #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => (progress > 0 ? progress : 0)}%;
  background: #eb7506;
  transition: width 0.1s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
`;
