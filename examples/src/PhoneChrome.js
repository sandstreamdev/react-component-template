import React from 'react';

import './PhoneChrome.css';

const PhoneChrome = ({ children }) => (
  <div className="smartphone">
    <div className="smartphone-content">{children}</div>
  </div>
);

export default PhoneChrome;
