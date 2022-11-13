import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
  box-shadow: 0 3px 3px gray;
  
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`  
  margin-left: 24px;  
  width: 80px;
  text-decoration: none;
  font-weight: normal;
  font-size: 20px;
  color: black;
  transition: color 250ms linear;
  
  &.active {
    color: red;    
  }

  :hover {
    color: red;
    opacity: 0.7;
  }
`;