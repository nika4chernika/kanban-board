import { useState } from 'react';
import "./header.css";

export const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='header'>
      <h1 className="h1-header">Awsome Kanban Board</h1>
      <div className="profile-header">
        <button className="user-setting-header" onClick={toggleDropdown}>
          <img src="./images/user-avatar.svg" alt="img" className="avatar-header" />
          <img src={isDropdownOpen ? "./images/arrow-up.svg" : "./images/arrow-down.svg"} alt="icon" className="arrow-header" />
        </button>
        {isDropdownOpen && (
            <div className="dropdown-header">
                <p className="text-default">Profile</p>
                <p className="text-default">Log Out</p>
            </div>
            )}
      </div>
    </header>
  );
};