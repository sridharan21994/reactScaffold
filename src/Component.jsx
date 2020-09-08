import React from 'react';
import './Component.scss';

function Component() {
  return (
    <div className="component">
        <h1>This app is running in {process.env.NODE_ENV} mode</h1>
    </div>
  );
}

export default Component;