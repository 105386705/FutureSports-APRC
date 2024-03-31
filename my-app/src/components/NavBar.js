import React from 'react';

const NavBar = ({ onNavigate }) => {
  const handleNavigation = (event, section) => {
    event.preventDefault();
    onNavigate(section);
  };

  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <ul>
          <li><a href="#home" onClick={(event) => handleNavigation(event, 'home')}>Home</a></li>
          <li><a href="#training" onClick={(event) => handleNavigation(event, 'training')}>Training</a></li>
          <li><a href="#events" onClick={(event) => handleNavigation(event, 'events')}>Events</a></li>
          <li><a href="#media" onClick={(event) => handleNavigation(event, 'media')}>Media</a></li>
          <li><a href="#contact" onClick={(event) => handleNavigation(event, 'contact')}>Contact</a></li>
        </ul>
      </div>
      <div className="right-nav">
        <form className="search-form" onSubmit={(event) => event.preventDefault()}>
          <input type="search" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
