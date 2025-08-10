
import React, { useState } from 'react';
import Navbar from './components/common/Navbar/navbar';
import HomePage from './pages/Home/Home';
import ContactPage from './pages/Contact/Contact';
import ProjectPage from './pages/Project/Project';
import ElectricBikeChatbot from './components/ui/ChatBot/ChatBot';



const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  // Render current section
  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'project':
        return <ProjectPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderCurrentSection()}
      <ElectricBikeChatbot/>
    </div>
  );
};

export default App;