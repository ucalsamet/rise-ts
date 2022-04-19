import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JobProvider from "./context/JobProvider"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <JobProvider>
      <App />
    </JobProvider>
  </React.StrictMode>
);

