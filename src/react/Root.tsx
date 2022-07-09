import React, { FC } from 'react';
import { render } from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Courier New',
    fontSize: 32,
    h6: {
      fontSize: 42,
    },
    caption: {
      fontSize: 32,
      lineHeight: 32,
    },
  },
});

const Root: FC = () => <ThemeProvider theme={darkTheme} />;

render(<Root />, document.getElementById('ui'));
