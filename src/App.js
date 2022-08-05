import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';

import { HomePage } from './pages';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes> */}
      <HomePage />
    </div>
  );
}
