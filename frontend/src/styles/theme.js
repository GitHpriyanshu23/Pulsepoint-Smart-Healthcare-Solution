import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#212121', // Black for primary actions
    },
    secondary: {
      main: '#757575', // Grey for secondary actions
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212', // Light grey background for the app
      paper: mode === 'light' ? '#e0e0e0' : '#1e1e1e', // Slightly darker grey for cards
    },
    text: {
      primary: mode === 'light' ? '#212121' : '#f5f5f5', // Dark text for readability
      secondary: mode === 'light' ? '#757575' : '#bdbdbd', // Grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Set Poppins as the font family
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 400 },
    body1: { fontWeight: 300 },
    body2: { fontWeight: 300 },
  },
});

const getTheme = (mode = 'light') => createTheme(getDesignTokens(mode));

export default getTheme;
