import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: block;
  padding: 0 16px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  width: 100px;
  margin-top: 20px;
  padding: 4px 16px 4px 16px;
  text-decoration: none;
  border: 1px solid black;  
  border-radius: 5px;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: black;
  transition: background-color 250ms linear,
              color 250ms linear;
  :hover, :focus {
    border: 1px solid red;
    color: white;
    background-color: red;
    box-shadow: 0 3px 3px grey;
  };
`;

export const MovieDescription = styled.div`
  display: flex;
  margin: 16px 0;  
`;
export const MoviePoster = styled.img`
  width: 300px;
`;

export const ContentMovie = styled.div`
  display: block;
  margin-left: 36px;
`;

export const CaptionMovie = styled.h2`  
  margin: 0;  
  font-size: 32px;
`;

export const Text = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 16px;
`;
export const Title = styled.h3`
  margin: 0;
  margin-top: 16px;
  font-size: 24px;
`;

export const MovieAddictionalInfo = styled.div`
  display: flex;
  flex-direction: column;  
  margin-bottom: 24px;
`;





