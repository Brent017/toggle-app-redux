import React from "react";

function Header(props) {
  return (
    <header>
      <h2>{props.theme === "light" ? "Light" : "Dark"} Theme</h2>
    </header>
  );
}

export default Header;
