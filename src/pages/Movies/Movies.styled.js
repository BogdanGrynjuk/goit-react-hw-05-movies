import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
`;

export const List = styled.ul`
  margin: 20px 0 0 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  };
`;

export const Link = styled(NavLink)`
  font-weight: normal;
  font-size: 16px;
  text-decoration: none;
  transition: color 250ms linear;

  :hover {
    color: red;
  }
`;