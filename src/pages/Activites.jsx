import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import activitesData from '../data/activitesData';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.colors.vertTresFonce}; // section sombre
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.vertClair};
  text-align: center;
  margin-bottom: 60px;
`;

const ActivityBlock = styled(motion.div)`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 40px;
  margin-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.vertForet}; // section claire
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const Text = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const ActivityTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.vertDoux};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.vertClair};
  line-height: 1.6;
`;

const IconWrapper = styled.div`
  margin-top: 20px;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.vertDoux};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.vertClair};
  }
`;


const Separator = styled(motion.hr)`
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.vertSapin};
  margin: 40px auto;
  width: 60%;
`;

const Activites = () => {
  return (
    <>
      <Header transparent={true} />
      <Section>
        <Container>
          <Title>Nos Activités</Title>
          {activitesData.map((item, index) => {
            const Icon = item.icon;
            return (
              <ActivityBlock
                key={item.id}
                reverse={index % 2 === 1}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image src={item.image} alt={item.titre} />
                <Text>
                  <ActivityTitle>{item.titre}</ActivityTitle>
                  <Description>{item.description}</Description>
                  {Icon && (
                    <IconWrapper>
                      <Icon />
                    </IconWrapper>
                  )}
                </Text>
                <Separator
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              </ActivityBlock>
            );
          })}
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default Activites;
