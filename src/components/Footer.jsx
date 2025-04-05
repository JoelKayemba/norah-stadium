import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import contactData from '../data/contactData';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';


const FooterContainer = styled(motion.footer)`
  background-color: ${({ theme }) => theme.colors.vertForet};
  padding: 40px 20px;
  color: ${({ theme }) => theme.colors.vertClair};
  text-align: center;
`;

const Socials = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.colors.vertClair};
    font-size: 20px;

    &:hover {
      color: ${({ theme }) => theme.colors.vertMenthe};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <p> {contactData.adresse}</p>
      <p>{contactData.telephone} |  {contactData.email}</p>

      <Socials>
        <a href={contactData.réseaux.facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href={contactData.réseaux.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href={contactData.réseaux.youtube} target="_blank" rel="noreferrer"><FaYoutube /></a>
      </Socials>


      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        © {new Date().getFullYear()} NORAH Stadium. Tous droits réservés.
      </p>
    </FooterContainer>
  );
};

export default Footer;
