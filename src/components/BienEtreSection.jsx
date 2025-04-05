import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bienEtreData from '../data/bienEtreData';

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.blanc};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled(motion.img)`
  width: 300px;
  height: 500px;
  max-width: 100%;
  
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  margin-bottom: 120px;
`;
const Image2 = styled(motion.img)`
  width: 300px;
  height: 500px;
  max-width: 100%;
  margin-left: -20px;
  
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
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 40px 0;
  border-radius: 12px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  min-width: 120px;
`;

const StatValue = styled.h3`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.vertTresFonce};
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.vertForet};
`;


const BienEtreSection = () => {
  return (
    <Section>
      <Wrapper>
        <Image src={bienEtreData.image} alt="Bien-être" whileHover={{scale:1.1}} transition={{duration:0.5, ease:'easeOut'}}/>
        <Image2 src={bienEtreData.image2} alt="Bien-être" whileHover={{scale:1.1}} transition={{duration:0.5, ease:'easeOut'}}/>
        <Content
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Titre>{bienEtreData.titre}</Titre>
          <Texte>{bienEtreData.texte}</Texte>
        </Content>
      </Wrapper>
          <StatsContainer>
            {bienEtreData.stats.map((item, index) => (
              <StatItem key={index}>
                <StatValue>{item.valeur}</StatValue>
                <StatLabel>{item.label}</StatLabel>
              </StatItem>
            ))}
          </StatsContainer>

    </Section>
  );
};

export default BienEtreSection;
