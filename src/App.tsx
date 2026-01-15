import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { purple, teal } from "@mui/material/colors";

import Footer from "./components/layout/footer";
import NavBar from "./components/layout/header";
import { RouterProvider } from "react-router";
import { routes } from "./router";
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: purple,
  },
  typography: {
    // Default font is Tajawal (for Arabic)
    fontFamily: "tajawal",
    allVariants: {
      color: "black",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'tajawal';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('tajawal');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 400;
          src: local('Arial');
        }
      `,
    },
  },
});

const AppContent = () => {
  const { i18n } = useTranslation();

  // Function to set the direction based on the current language
  const getDirection = () => {
    return i18n.language === 'ar' ? 'rtl' : 'ltr';
  };

  // Function to change font family based on the language
  const getFontFamily = () => {
    return i18n.language === 'ar' ? 'tajawal' : 'Arial, sans-serif';
  };

  return (
    <Box sx={{ direction: getDirection(), height: "100vh", fontFamily: getFontFamily() }}>
      {/* <NavBar /> */}
      <RouterProvider router={routes} />
      {/* <Footer /> */}
    </Box>
  );
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Box>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=tajawal:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContent />
        </ThemeProvider>
      </Box>
    </I18nextProvider>
  );
}

export default App;
