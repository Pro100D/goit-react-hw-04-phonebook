import styled from '@emotion/styled';

export const ListContact = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 13px;
`;

export const ListContactItem = styled.li`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 25px;

  padding: 15px 25px;

  border: 2px solid ${({ theme }) => theme.colors.prymeryColor};
  border-radius: 6px;

  background-color: rgba(227, 226, 226, 0.518);
`;

export const ListContactInfo = styled.p`
  margin-bottom: 0;

  font-size: 20px;
`;

export const ListRemoveBtn = styled.button`
  padding: 10px 25px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.white};

  font-size: 15px;
  font-weight: 700;

  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.prymeryColor};

    color: ${({ theme }) => theme.colors.white};

    transition: background-color 250ms linear;
  }
`;
