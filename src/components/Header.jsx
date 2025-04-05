import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const HeaderContainer = styled(motion.header)`
  width: 100%;
  padding: 20px 40px;
  position: ${({ transparent }) => (transparent ? 'absolute' : 'fixed')};
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme, transparent }) =>
    transparent ? 'transparent' : 'rgba(68, 88, 94, 0.6)'};

  backdrop-filter: ${({ transparent }) =>
    transparent ? 'none' : 'blur(12px)'};
  -webkit-backdrop-filter: ${({ transparent }) =>
    transparent ? 'none' : 'blur(12px)'};

  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;


const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.vertClair};
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.vertClair};
  margin-left: 24px;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.vertMenthe};
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.vertClair};
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.vertForet};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;

const Header = ({transparent}) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer
      transparent={transparent}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Logo>NORAH Stadium</Logo>

      <Nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
        <NavLink to="/activites">Activités</NavLink>
        <NavLink to="/reservation">Réservation</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>

      <MobileMenu onClick={() => setOpen(!open)}>
        ☰
      </MobileMenu>

      {open && (
        <Dropdown
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>Accueil</NavLink>
          <NavLink to="/a-propos" onClick={() => setOpen(false)}>À propos</NavLink>
          <NavLink to="/activites" onClick={() => setOpen(false)}>Activités</NavLink>
          <NavLink to="/reservation" onClick={() => setOpen(false)}>Réservation</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </Dropdown>
      )}
    </HeaderContainer>
  );
};

export default Header;
