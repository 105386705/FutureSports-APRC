import React, { useState } from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import WeatherWidget from './components/WeatherWidget';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Home from './components/MainContent/Home';
import Training from './components/MainContent/Training';
import Events from './components/MainContent/Events';
import Media from './components/MainContent/Media';
import Contact from './components/MainContent/Contact';
import './App.css';

const searchIndex = {
  "home": ["welcome", "introduction", "start"],
  "training": ["workout", "exercise", "fitness"],
  "events": ["calendar", "upcoming", "schedule"],
  "media": ["gallery", "photos", "videos"],
  "contact": ["support", "help", "customer service"]
};
const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const handleNavigation = (section) => {
    setCurrentSection(section);
  };
  const handleSearch = (searchTerm) => {
    let bestMatch = "";
    let highestMatchCount = 0;
    for (const [section, keywords] of Object.entries(searchIndex)) {
      let matchCount = keywords.filter(keyword => searchTerm.toLowerCase().includes(keyword)).length;
      if (matchCount > highestMatchCount) {
        highestMatchCount = matchCount;
        bestMatch = section;
      }
    }
    if (bestMatch) {
      handleNavigation(bestMatch);
    } else {
      console.log("No match found.");
    }
  };
  const renderContent = () => {
    switch (currentSection) {
      case 'home': return <Home />;
      case 'training': return <Training />;
      case 'events': return <Events />;
      case 'media': return <Media />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };
  return (
    <div className="grid-container">
      <Logo />
      <Header />
      <WeatherWidget />
      <NavBar onNavigate={handleNavigation} onSearch={handleSearch} />
      <MainContent>
        {renderContent()}
      </MainContent>
      <Footer />
    </div>
  );
};
export default App;