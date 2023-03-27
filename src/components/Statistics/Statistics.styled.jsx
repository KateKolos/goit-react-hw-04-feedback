import styled from 'styled-components';

export const ListItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 10px;
`;

export const ListItem = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #92a7df;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
