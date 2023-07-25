import styled from "styled-components";

export const InputContainer = styled.div`
  border-radius: 20px;
  height: 62px;
  width: 80%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #444c56;
  background-color: #22272e;

  input {
    background: transparent;
    border: 2px solid transparent;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    color: #ffffff;
    font-size: 20px;
    outline: none;
    border-radius: 20px;
  }

  input::placeholder {
    color: #586069;
  }

  input:focus {
    border: 2px solid #0366d6;
    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.5);
  }
`;
