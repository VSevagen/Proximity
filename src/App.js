import React from 'react';
import './App.css';
import Header from './components/header';
import Mission from './components/mission';
import SolvedProb from './components/solvedProb';
import Footer from './components/footer';

function App() {

  return (
    <div>
      {/* Header is the component containing the header bar, the video/poster and the langauge selector */}
      <Header />

      {/* Mission is the 1st part of the middle section of the website. */}
      <Mission />

      {/* SolvedProb is the 2nd part of the middle section of the website, including the view work and return to top elements. */}
      <SolvedProb />

      {/* Footer is the footer of the website containing the privacy statement and socials. */}
      <Footer />
    </div>
  );
}

export default App;
