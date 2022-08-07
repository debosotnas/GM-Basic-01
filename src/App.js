import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';

import { HomePage, NewGamePage, GamePage } from './pages';

export default function App() {
  return (
    <>
      <div className="container mb-4 py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-game" element={<NewGamePage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
      <div className="swapi-people"></div>
    </>
  );
}
