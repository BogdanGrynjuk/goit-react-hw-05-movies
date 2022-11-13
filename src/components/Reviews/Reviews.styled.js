import styled from "styled-components";

export const ReviewsList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ReviewsItem = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 20px;
  };
`;

export const Autor = styled.h3`
  margin: 0 0 15px 0;
`;

export const Content = styled.p`
  margin: 0;  
  font-size: 16px;
`;
