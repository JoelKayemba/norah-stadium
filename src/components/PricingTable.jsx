import React from 'react';
import styled from 'styled-components';
import tarifsData from '../data/tarifsData';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.blanc};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.vertForet};
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.vertTresFonce};
  color: ${({ theme }) => theme.colors.blanc};
  border-radius: 16px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: left;
  position: relative;
  top: ${({ index }) => index * 20}px; // effet d'escalier
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.blanc};
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.vertDoux};
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.vertSapin};
`;

const PricingTable = () => {
  return (
    <Section>
      <Title>Nos Tarifs</Title>
      <Grid>
        {tarifsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={index}
              index={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <IconWrapper><Icon /></IconWrapper>
              <CardTitle>{item.titre}</CardTitle>
              <Price>{item.prix}</Price>
              <Description>{item.description}</Description>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

export default PricingTable;
