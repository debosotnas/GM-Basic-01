import React from 'react';
import { Link } from 'react-router-dom';
import { Box, HistoryCardContainer } from '../components';
import { FALCON } from '../assets/data/chars';

export default function HomePage() {
  return (
    <>
      <div className="row">
        <div className="col text-center logo-wrapper d-flex align-items-center justify-content-center">
          <img
            src="https://cdn.jsdelivr.net/gh/debosotnas/GM-Basic-01@main/src/assets/imgs/swapi-logo.svg"
            alt="swapi batlle logo"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <Box>
            <h2 className="mt-1">History</h2>
            <HistoryCardContainer></HistoryCardContainer>
          </Box>
        </div>
        <div className="col-md-4">
          <Box className="text-center">
            <div className="pre-icon pre-small mb-3">
              <pre>{FALCON}</pre>
            </div>
            <Link to="/new-game" className="btn btn-swapi-main">
              Start new game!
            </Link>
          </Box>
          <Box>
            <h4 className="mt-2">High scores</h4>
            <ul>
              <li>Ruffo / 10.500</li>
              <li>Sarki / 10.300</li>
              <li>PopDylan / 9.050</li>
              <li>Roco / 7100</li>
              <li>Zyppy / 6200</li>
            </ul>
          </Box>
        </div>
      </div>
    </>
  );
}
