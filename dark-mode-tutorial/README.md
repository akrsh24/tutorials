# Dark Mode Tutorial

We can easily do the theme switching in 4 steps -

- **Theme.js (src/components/theme/)** - This contains all the color properties of the dark and light theme.

- **GlobalStyles.js (src/components/)** - This contains the global styles for the entire document.

- **Toggler.js (src/components/theme/)** - This is the toggler button, which toggles on click to change the theme.

- **useThemeSwitch.jsx (src/components/hooks/)** - A custom hook that does all the persistence and switching of the current theme. 

## Tech Stack

- ReactJS
- [Styled-Components](https://styled-components.com/) 
   - Global Styles
   - ThemeProvider Context Provider


