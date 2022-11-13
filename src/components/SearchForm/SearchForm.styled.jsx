import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 320px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid black;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  border: none;  
  outline: none;
  cursor: pointer;
  transition: background-color 500ms linear,
              color 500ms linear;

  &:hover {
    color: white;
    background-color: red;
  } 
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0 12px;
  border: none;
  font: inherit;
  font-size: 16px;  
  outline: none;  
  
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;