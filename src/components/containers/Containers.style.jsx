import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark01};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const QuoteContainer = styled.div`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.dark02};
  color: ${({ theme }) => theme.colors.white01};
  padding: 30px;
  border-radius: 10px;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 60px;
  margin-bottom: 50px;
`;
