import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/index.scss';

import App from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <App />,
  );
