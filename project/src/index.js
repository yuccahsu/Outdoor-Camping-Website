import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TentProvider } from './Context';
import App from './App';
import './index.css';

ReactDOM.render(
  <TentProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </TentProvider>,
  document.getElementById('root')
);


