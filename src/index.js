import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { CustomContext } from './context/database';

import { ToastProvider } from 'react-toast-notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-right">
      <App />
    </ToastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
