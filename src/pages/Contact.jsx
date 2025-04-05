import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.vertTresFonce};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.vertForet};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.vertDoux};
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blanc};
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blanc};
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.vertDoux};
  color: ${({ theme }) => theme.colors.vertTresFonce};
  padding: 12px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.vertForet};
    color: white;
  }
`;

const Contact = () => {
  return (
    <>
      <Header transparent={true} />
      <Section>
        <FormContainer>
          <Title>Contactez-nous</Title>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input type="text" placeholder="Votre nom" required />
            <Input type="email" placeholder="Votre email" required />
            <Textarea rows="5" placeholder="Votre message" required />
            <Button type="submit">Envoyer</Button>
          </Form>
        </FormContainer>
      </Section>
      <Footer />
    </>
  );
};

export default Contact;
