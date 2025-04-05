import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroData from '../data/heroData';
import { useNavigate } from 'react-router-dom';


const HeroContainer = styled.section`
  background-image: url(${heroData.image});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 80px;
  color: ${({ theme }) => theme.colors.vertClair};

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 90vh;
  }
`;

const Content = styled(motion.div)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  ;
`;

const Intro = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  `;

const Titre = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  width: 60%;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const Slogan = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  width: 40%;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
`;

const Bouton = styled(motion.button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.vertClair};
  border: solid 2px ${({ theme }) => theme.colors.vertClair};
  padding: 12px 30px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.vertClair};
    color: ${({ theme }) => theme.colors.vertForet};
  }
`;

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer id="hero-section">
      <Content
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8 , ease: "easeOut" }}
      >
        <Intro>{heroData.intro}</Intro>
        <Titre>{heroData.titre}</Titre>
        <Slogan>{heroData.slogan}</Slogan>
        <Bouton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 , ease: "easeOut" }}
          onClick={() => navigate('/reservation')}
        >
          
          {heroData.boutonTexte}
        </Bouton>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;
