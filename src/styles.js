import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    background-color: #22272e;
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
  }

  body > div {
    width: 100vw;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #88888855;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  body {
    scrollbar-width: thin;
    scrollbar-color: #888 #f3f3f3;
  }
`;