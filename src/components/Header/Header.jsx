import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://w7.pngwing.com/pngs/851/133/png-transparent-www-logo-internet-computer-icons-world-wide-web-web-design-text-trademark.png"
        alt="logo"
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
