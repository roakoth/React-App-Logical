import React from 'react';
import styles from './Navbar.module.css'

const Navbar = ({ onSelectLanguage }) => {

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    onSelectLanguage(selectedLanguage);
  };

return (
    <nav className={styles.mainNav}>
    <div className={styles.container}>
    <div className={styles.languageSwitcher}>
    <label>Select Language:</label>
    <select id="language-select" onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
  </div>

    </div>
  </nav>
)
};

export default Navbar;