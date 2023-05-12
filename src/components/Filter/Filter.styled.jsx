import styled from '@emotion/styled';

export const Fiterlable = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-right: 15px;
`;
export const FilterInput = styled.input`
  padding: 10px 15px;

  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.prymeryBgColor};
  outline: none;

  font-size: 19px;

  width: 200px;
  transition: background-color 250ms linear;

  :focus {
    border-color: ${({ theme }) => theme.colors.accentColor};
    background-color: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 250ms linear;
  }
`;
