import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CurrencyCards from './components/CurrencyCards/CurrencyCards'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CurrencyCards></CurrencyCards>
  </React.StrictMode>
);

reportWebVitals();
