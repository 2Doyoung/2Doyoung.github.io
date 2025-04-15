import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import styled from 'styled-components';
import AboutMe from './components/sections/AboutMe';

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

    font-family: 'Noto Sans KR', sans-serif;
    scroll-behavior: smooth;
    color: #333333;
    line-height: 1.5;

    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

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
          <Section id="about" title="About Me">
              <AboutMe></AboutMe>
          </Section>
          <Section id="experience" title="Experience"></Section>
          <Section id="skill" title="Skill"></Section>
          <Section id="project" title="Project"></Section>
        </Main>
        <Footer />
      </Container>
    </>
  );
}

export default App;