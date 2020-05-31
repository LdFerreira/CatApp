import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const List = styled.div`
  flex-direction: column;
  margin-left: 50px;
  margin-top: 50px;

  button {
    flex: 1;
    margin-top: 50px;
    background: #caffbf;
    color: #8d85bf;
    border-radius: 5px;
    width: 50%;
    padding: 15px;
    border: none;
    text-decoration: none;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.2s;
    margin-left: 150px;

    & + button {
      margin-top: 25px;
    }

    &:hover {
      background: #8d85bf;
      color: #caffbf;
    }

    svg {
      margin-left: auto;
    }
  }
`;

export const CategoryList = styled.ul`
  h1 {
    color: #fee8a0;
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }

  button {
    margin-top: 10px;
    background: #caffbf;
    color: #8d85bf;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    border: none;
    display: block;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.2s;

    & + button {
      margin-top: 25px;
    }

    &:hover {
      transform: translateX(10px);
    }

    svg {
      margin-left: auto;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }

`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    animation: ${rotate} 2s linear infinite;
  }
`;
