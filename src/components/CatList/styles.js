import styled from 'styled-components';

export const CatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  list-style: none;

  li {
    display: flex;
    background: #fffffc;
    flex-direction: column;
    border-radius: 10px;
    max-width: 260px;
    max-height: 260px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    img {
      flex: 1;
      align-self: center;
      width: 250px;
      height: 250px;
      border-radius: 10px;
    }
  }
`;
