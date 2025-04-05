import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import activitesData from '../data/activitesData';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.vertClair};
  color: ${({ theme }) => theme.colors.vertTresFonce};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled(motion.div)`
  width: 300px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Button = styled(motion.button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.vertTresFonce};
  border: 1px solid ${({ theme }) => theme.colors.vertTresFonce};
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s;
  width: 80%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.vertDoux};
  }
`;

const ActivitesSection = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Title>Nos Activités</Title>
      <Grid>
        {activitesData.map((item) => (
          <Card
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src={item.image} alt={item.titre} whileHover={{scale:1.2}} transition={{ duration:0.8, ease:'easeOut'}} />
            <CardContent>
              <CardTitle>{item.titre}</CardTitle>
              <Description>{item.description}</Description>
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                onClick={ () => navigate("/activites") }
              >
                {item.bouton}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default ActivitesSection;
