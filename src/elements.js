//import './App.css';
import styled from '@emotion/styled';

export const PreviewWrapper = styled.div`
  margin-bottom: 20px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    background-color: #93e88c;
    font-family: 'Open Sans Semibold', sans-serif;
    font-weight: 600;
    line-height: 30px;
    color: blue
  }

`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-bottom: 20px;

  input,
  select {
    margin: 5px;
  }

  label {
    width:40%;
  }

  button {
    align-self: center;
    width: 100px;
    margin: 10px;
    font-family: 'Open Sans Semibold', sans-serif;

  }
`;
