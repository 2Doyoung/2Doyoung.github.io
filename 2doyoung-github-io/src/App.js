import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Section id="about" title="About Me" />
      <Section id="projects" title="Projects" />
      <Section id="contact" title="Contact" />
      <Footer />
    </>
  );
}

export default App;