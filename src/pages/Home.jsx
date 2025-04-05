import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ActivitesSection from '../components/ActivitesSection';
import PresentationSection from '../components/PresentationSection';
import BienEtreSection from '../components/BienEtreSection';
import PricingTable from '../components/PricingTable';
import GallerySection from '../components/Gallery';

function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50); // si scroll > 50px → header devient opaque
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header transparent={isAtTop} />
      <HeroSection />
      <ActivitesSection />
      <PresentationSection />
      <BienEtreSection />
      <PricingTable />
      <GallerySection />
      
     
      <Footer />
    </>
  );
}

export default Home;
