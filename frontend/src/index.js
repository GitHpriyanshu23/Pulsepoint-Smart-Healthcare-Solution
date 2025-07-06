import React, { useMemo, useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import '@fontsource/poppins';
import getTheme from './styles/theme';

export const ThemeModeContext = createContext({ toggleColorMode: () => {}, mode: 'light' });

function Main() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [mode]
  );
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
