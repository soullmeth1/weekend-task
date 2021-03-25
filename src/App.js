import styled from 'styled-components';
import './App.css';
import DefinitionSection from './components/DefinitionSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Infos from './components/Infos';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import img from './assets/group-3.png';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <DefinitionSection />
      <ContentStyle>
        <Testimonial />
        <Infos />
      </ContentStyle>
      <Footer />
    </>
  );
}

export default App;

const ContentStyle = styled.div`
  background-color: var(--textBlack);
  color: var(--textWhite);
  padding: 16.2rem 3.2rem calc(40.4rem - 6.7rem);
  position: relative;
  @media only screen and (min-width: 400px) {
    padding: 16.2rem 0 calc(20.3rem - 6.7rem);
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: bottom left;
  }
`;
