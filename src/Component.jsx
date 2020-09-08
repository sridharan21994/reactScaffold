import React from 'react';
import './Component.scss';

function Component() {
  return (
    <div className="component">
        This app is running in {process.env.NODE_ENV} mode
    </div>
  );
}

export default Component;