import React from 'react';
export const themes = {
    light: {
      background: '#282c34',
    },
    dark: {
      background: '#222222',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );