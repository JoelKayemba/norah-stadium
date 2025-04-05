import React from 'react';
import styled from 'styled-components';
import galleryData from '../data/galleryData';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.vertTresFonce};
  text-align: center;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.vertDoux};
`;

const SousTitle = styled.p`
  font-size: 1.1rem;
  color: #ccc;  
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
  `;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled(motion.div)`
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GallerySection = () => {
  return (
    <Section>
      <Title>Galerie</Title>
      <SousTitle>Profitez des belles images de notre espace, un lieu unique et chaleureux pouvant accueillir vos événements, célébrations, et moments inoubliables dans un cadre exceptionnel.</SousTitle>
      <Grid>
        {galleryData.map((item, index) => (
          <ImageContainer
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image src={item} alt={item.alt} />
          </ImageContainer>
        ))}
      </Grid>
    </Section>
  );
};

export default GallerySection;
