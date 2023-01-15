import styled from '@emotion/styled';

export const Button = styled.button`
  min-width: 100px;
  font-family: inherit;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  margin-right: 15px;
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  &:active {
    box-shadow: 0 0 0 4px #cbd6ee;
    background-color: aliceblue;
    color: #4676d7;
  }
`;
