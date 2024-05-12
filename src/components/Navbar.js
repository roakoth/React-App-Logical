import React from 'react';
import styles from './Navbar.module.css'

const Navbar = ({ onSelectLanguage }) => {

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    onSelectLanguage(selectedLanguage);
  };

return (
    <nav className={styles.mainNav}>
    <div>
    <div className={styles.languageSwitcher}>
    <label>Language:</label>
    <select className={styles.dropdown} id="language-select" onChange={changeLanguage}>
      <option value="en"> English </option>
      <option value="ar"> Arabic </option>
    </select>
  </div>

    </div>
  </nav>
)
};

export default Navbar;