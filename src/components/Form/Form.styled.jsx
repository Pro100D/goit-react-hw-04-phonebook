import styled from '@emotion/styled';

export const FormPhonebook = styled.form`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const FormInput = styled.input`
  padding: 10px 15px;

  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.prymeryBgColor};
  outline: none;

  font-size: 19px;

  width: 400px;
  transition: background-color 250ms linear;

  :focus {
    border-color: ${({ theme }) => theme.colors.accentColor};
    background-color: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 250ms linear;
  }
`;

export const FormLeable = styled.label`
  font-size: 18px;
  font-weight: 600;
`;
export const FormButtonSubmit = styled.button`
  width: 200px;

  padding: 10px 15px;

  font-size: 19px;
  font-weight: 700;

  border-radius: 6px;

  margin-bottom: 50px;

  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.prymeryColor};

  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.prymeryColor};

    transition: background-color 2250ms linear;

    color: ${({ theme }) => theme.colors.white};

    transition: color 250ms linear;
  }
`;
