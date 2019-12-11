import React from "react";
import Menu from "./Menu";
import Favorite from "./Favorite";
import Button from "./Button";
import Header from "./Header";
import styles from "./styles.css";
import { ThemeContextConsumer } from "./themeContext";

function App() {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className={`${context.theme}-theme`}>
          <Menu />
          <hr />
          <Favorite />
          <hr />
          <Header />
          <Button />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default App;
