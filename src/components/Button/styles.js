import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #0366d6;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  height: 62px;
  width: 80%;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #238636;
    transition: all 0.25s ease-in-out;
  }

  &:disabled {
    background-color: #6a737d;
    cursor: not-allowed;
  }
`;
