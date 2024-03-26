import React, { useState } from 'react';
import ArticleEnglish from './components/ArticleEnglish.js';
import ArticleArabic from './components/ArticleArabic.js'
import Navbar from './components/Navbar.js'

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
      <div>
      <Navbar onSelectLanguage={handleLanguageChange} />
      {selectedLanguage === 'en' ? <ArticleEnglish /> : <ArticleArabic />}
    </div>
  );
}

export default App;
