import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import styled from 'styled-components';

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

    font-family: 'Noto Sans KR', sans-serif;
    scroll-behavior: smooth;
    margin: 0 auto;
    width: 1200px;
`;

const Main = styled.main`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 120px;
`;

function App() {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <Section id="about" title="About Me" />
          <Section id="projects" title="Projects" />
          <Section id="contact" title="Contact" />
        </Main>
        <Footer />
      </Container>
    </>
  );
}

export default App;