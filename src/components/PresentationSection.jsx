import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import presentationData from '../data/presentationData';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.blanc};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 500px;
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`;

const Content = styled(motion.div)`
  flex: 1;
`;

const Titre = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.vertForet};
  margin-bottom: 20px;
`;

const Texte = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.vertSapin};
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Button = styled(motion.button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.vertTresFonce};
  color: ${({ theme }) => theme.colors.vertTresFonce};
  padding: 10px 24px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
   
   border-color: ${({ theme }) => theme.colors.vertDoux};
    
  }
`;

const PresentationSection = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Wrapper>
        <Content
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Titre>Qui sommes-nous ?</Titre>
          <Texte>{presentationData.texte}</Texte>
          <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.9 , ease: "easeOut" }} onClick={() => navigate('/a-propos')}>
            En savoir plus
          </Button>
        </Content>

        <Image src={presentationData.image} alt="Présentation" />
      </Wrapper>
    </Section>
  );
};

export default PresentationSection;
