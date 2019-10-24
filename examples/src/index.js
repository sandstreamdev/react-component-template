import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import App from './App';
import PhoneChrome from './PhoneChrome';

ReactDOM.render(
  <div className="test-app">
    <PhoneChrome>
      <App />
    </PhoneChrome>
  </div>,
  document.getElementById('root')
);
