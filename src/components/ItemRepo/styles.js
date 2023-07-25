import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  color: #ffffff;

  h3 {
    font-size: 32px;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    color: #ffffff66;
    margin-bottom: 20px;
  }

  a {
    margin-top: 10px;
    color: #ffffff;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    margin: 10px 0px 5px 0px;
    padding: 10px;
    background-color: #ff0000;
    color: #ffffff;
    border: none;
    border-radius: 10%;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;

    &:hover {
      background-color: #d60000;
    }
  }

  hr {
    border: 1px solid #ffffff66;
    margin: 20px 0px;
  }
`;
