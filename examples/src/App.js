import React from 'react';
import { ComponentTemplate } from '@sandstreamdev/react-component-template';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.example}>
      <h3>react-component-template example</h3>
      <h5>(try also mobile view in dev tools for touch events)</h5>
      <ComponentTemplate />
    </div>
  );
}

export default App;
