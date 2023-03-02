import React from "react";
import "../styles/Header.css";
import compasHeader from "../assets/compass_header.svg";
import loupe from "../assets/magnifying-glass.svg";
import person from "../assets/person-circle-outline.svg";

function Header() {
  return (
    <>
      <div className="bg-white w-full sticky top-0 z-50">
        <div className="header container">
          <div className="header__compass">
            <a href="/" className="flex">
              <img
                src={compasHeader}
                alt="logo city compass"
                className="header__compass-img"
              />
            </a>
          </div>

          <a href="/" title="Accueil" className="type-h1 header__title">
            CITY COMPASS
          </a>
          <div className="header__profile">
            <img
              src={loupe}
              alt="loupe search bar"
              className="header__profile--loupe"
            />
            <img
              src={person}
              alt="person icon to profile"
              className="header__profile--search"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;