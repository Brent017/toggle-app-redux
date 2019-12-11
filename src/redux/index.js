import redux, { createStore } from "redux";

export function changeTheme() {
  return {
    type: "CHANGE_THEME"
  };
}

function themeReducer(theme = "light", action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return theme === "light" ? "dark" : "light";
    default:
      return theme;
  }
}

const store = createStore(themeReducer);
store.subscribe(() => console.log(store.getState()));
export default store;
