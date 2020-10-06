import React from "react";

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <ion-icon class="nav__icon" name="home"></ion-icon>
      </li>
      <li className="nav__item">
        <ion-icon class="nav__icon" name="book-outline"></ion-icon>
      </li>
      <li className="nav__item">
        <ion-icon class="nav__icon" name="person-outline"></ion-icon>
      </li>
      <li className="nav__item">
        <ion-icon class="nav__icon" name="mail-outline"></ion-icon>
      </li>
      <li className="nav__item">
        <ion-icon class="nav__icon" name="settings-outline"></ion-icon>
      </li>
      <li className="nav__item_last">
        <ion-icon class="nav__icon" name="log-out-outline"></ion-icon>
      </li>
    </ul>
  );
};

export default Nav;
