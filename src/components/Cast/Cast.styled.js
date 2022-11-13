import styled from "styled-components";

export const Profiles = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Profile = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 20px;
  };
`;

export const PhotoActor = styled.img`
  width: 200px;
`;
export const Name = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
`;

export const Character = styled.p`
  margin: 0;  
  font-size: 16px;
`;