import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "./redux";
import Menu from "./Menu";
import Favorite from "./Favorite";
import Button from "./Button";
import Header from "./Header";
import styles from "./styles.css";

function App(props) {
  return (
    <div className="{props.theme}-theme">
      <Menu />
      <hr />
      <Favorite />
      <hr />
      <Header />
      <Button onClick={props.theme} />
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     theme: state
//   };
// }

// const mapDispatchToProps = {
//   changeTheme
// };

export default connect(state => ({ theme: state }), { changeTheme })(App);
