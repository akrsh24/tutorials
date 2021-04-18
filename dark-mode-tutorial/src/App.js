import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { darkTheme, lightTheme } from './components/theme/Theme';
import { useDarkMode } from "./components/hooks/useDarkMode";
import Toggler from "./components/theme/Toggler";

const App = () => {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
          <h1 style={{ margin: "0 auto" }}>Welcome to Theme - {theme}</h1>
          <Toggler theme={theme} toggleTheme={themeToggler}>Switch Theme</Toggler>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
