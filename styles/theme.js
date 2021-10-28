import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: '"Manrope", "Helvetica", "Arial", sans-serif ',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    common: {
      white: 'rgba(250,250,250,1)',
      black: 'rgba(26,26,26,1)',
    },
    background: {
      paper: 'rgb(250, 250, 250)',
      default: 'rgb(250, 250, 250)',
    },
    text: {
      primary: 'rgba(53, 36, 17, 1)',
      secondary: 'rgba(255, 255, 255, 1)',
      disabled: 'rgba(102, 102, 102, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.12)',
    },
    primary: {
      main: 'rgba(13, 20, 37, 1)',
      contrastText: 'rgba(153,136,117,1)',
    },
    secondary: {
      main: 'rgba(204, 204, 204, 1)',
      contrastText: 'rgba(13,20,37,1)',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    tonalOffset: 0.2,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
