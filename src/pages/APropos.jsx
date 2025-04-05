import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aproposData from '../data/aproposData';

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.vertTresFonce};
  color: #fff;
  padding: 200px 20px;

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Titre = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.vertDoux};
  margin-bottom: 20px;
`;

const Texte = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.7;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 60px;
  gap: 30px;
`;

const StatCard = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.vertClair};

  svg {
    font-size: 2rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.vertDoux};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  p {
    color: #aaa;
  }
`;

const Apropos = () => {
  return (
    <>
      <Header transparent={true} />
      <Section>
        <Container>
          <Left>
            <Titre>{aproposData.titre}</Titre>
            <Texte>{aproposData.contenu}</Texte>
          </Left>
          <Right>
            <Image src={aproposData.image} alt="Présentation Norah" />
          </Right>
        </Container>

        <StatsContainer>
          {aproposData.stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <StatCard key={index}>
                <Icon />
                <h3>{item.valeur}</h3>
                <p>{item.label}</p>
              </StatCard>
            );
          })}
        </StatsContainer>
      </Section>
      <Footer />
    </>
  );
};

export default Apropos;
