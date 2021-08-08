import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import store from './redux/store';
import theme from './theme';
import Home from './pages/Home';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
