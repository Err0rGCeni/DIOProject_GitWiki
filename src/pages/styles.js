import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: #22272e;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  overflow-y: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  img {
    margin-bottom: 20px;
  }
`;
