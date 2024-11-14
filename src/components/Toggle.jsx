import React from 'react';
import useDarkMode from './useDarkMode';

function Toggle() {
    const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="toggleSwitchContainer">
      <p>Dark Mode</p>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={() => toggleDarkMode()}/>
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Toggle