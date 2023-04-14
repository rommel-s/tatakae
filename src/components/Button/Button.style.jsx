import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white01};
  font-weight: bold;
  font-size: 16px;
  border: none;
  padding: 16px 50px;
  border-radius: 5px;
  margin-top: 30px;
  z-index: 1000;

  &:active {
    background-color: ${({ theme }) => theme.colors.white01};
    transform: translateY(2px);
  }
`;
