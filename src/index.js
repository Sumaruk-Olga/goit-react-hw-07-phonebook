import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from 'components/App/App';
import './index.css';
import { store } from 'redux/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'utiles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
  <Provider store={store}>
    <BrowserRouter basename="/goit-react-hw-07-phonebook">
      <App/>
    </BrowserRouter>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
