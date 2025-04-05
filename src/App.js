import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import theme from './styles/theme';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// pages
import Home from './pages/Home';
import APropos from './pages/APropos';
import Activites from './pages/Activites';
import Reservation from './pages/Reservation';
import Tarifs from './pages/Tarifs';
import Evenements from './pages/Evenements';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
