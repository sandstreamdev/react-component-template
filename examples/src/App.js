import React from 'react';
import { ComponentTemplate } from '@sandstreamdev/react-component-template';
import '@sandstreamdev/react-component-template/dist/styles.css';

import './app.css';

function App() {
  return (
    <div className="example">
      <h3>react-component-template example</h3>
      <h5>(try also mobile view in dev tools for touch events)</h5>
      <ComponentTemplate />
    </div>
  );
}

export default App;
