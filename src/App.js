import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';

import { HomePage, NewGamePage, GamePage, StoryPage } from './pages';

export default function App() {
  return (
    <>
      <div className="container mb-4 py-4">
        <div className="row">
          <div className="col text-center logo-wrapper d-flex align-items-center justify-content-center">
            <img
              src="https://raw.githubusercontent.com/debosotnas/GM-Basic-01/037f3a1cc09bf8de34edf98847e77c13c2c46935/src/assets/imgs/swapi-logo.svg"
              alt="swapi batlle logo"
            />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-game" element={<NewGamePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/story-mode" element={<StoryPage />} />
        </Routes>
      </div>

      <div className="swapi-people"></div>
    </>
  );
}
