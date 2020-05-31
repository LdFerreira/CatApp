import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="CatApp" />
      </Link>
    </Container>
  );
}

export default Header;
