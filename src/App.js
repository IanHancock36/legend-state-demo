import { observable, observe } from "@legendapp/state";
import logo from "./logo.svg";
import "./App.css";

const themeState = observable({ settings: { theme: "dark" } });
themeState.settings.theme === "dark";

observe(() => {
  console.log(themeState.settings.theme.get());
});

const App = observer(function App() {
  const theme = state.settings.theme.get();
  const toggleTheme = () => {
    state.settings.theme.set((theme) => {
      theme === "dark" ? "light" : "dark";
    });
  };
  return (
    <div>
      <div>THeme :{theme}</div>
      <button onClick={toggleTheme}>TOGGLE THEME </button>
    </div>
  );
});

export default App;
