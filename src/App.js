import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./redux";
import Menu from "./Menu";
import Favorite from "./Favorite";
import Button from "./Button";
import Header from "./Header";
import styles from "./styles.css";

function App(props) {
  const theme = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="{props.theme}-theme">
      <Menu />
      <hr />
      <Favorite />
      <hr />
      <Header />
      <Button onClick={() => dispatch(changeTheme())} />
    </div>
  );
}

export default App;
