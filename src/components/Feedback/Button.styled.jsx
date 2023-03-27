import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgb(146, 167, 223, 0.2);
  border-radius: 10px;
  box-shadow: rgb(146, 167, 223, 0.2) 0 1px 3px 0;
  box-sizing: border-box;
  color: #92a7df;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  /* text-decoration: none; */
  width: auto;
  margin-bottom: 20px;

  :hover,
  :focus {
    border-color: rgb(146, 167, 223, 0.2);
    box-shadow: rgb(146, 167, 223, 0.2) 0 4px 12px;
    color: #7890d2;
  }

  :hover {
    transform: translateY(-1px);
  }

  :active {
    background-color: #f0f0f1;
    border-color: rgb(146, 167, 223, 0.2);
    box-shadow: rgb(146, 167, 223, 0.2) 0 2px 4px;
    color: #7890d2;
    transform: translateY(0);
  }
`;
