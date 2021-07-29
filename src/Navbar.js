import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const submitSearch = (e) => {
    e.preventDefault();
  };

  const [search, setSearch] = useState(false);

   const openSearch = () => {
     setSearch(true);
   }

  const searchClass = search ? "searchInput active" 
    : "searchInput";

  return (
    <div className="navbar">
      <ul className="nvabarMenu">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/post">Post</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input
          type="search"
          className={searchClass}
          placeholder="search"
          value={search}
        />
        <img className="searchIcon" onClick={openSearch} />
        </form>
      </div>
    </div>
  );
}

export default Navbar