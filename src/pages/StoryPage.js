import React from 'react';
import React, { useEffect, useState } from 'react';
import SwapiData from '../api/Swapi.js';
import { Link } from 'react-router-dom';
import { Box, StoryCardContainer } from '../components';
import { FALCON } from '../assets/data/chars';

export default function StoryPage() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function getPeople() {
      const data = await SwapiData.getPeople();
      console.log('>> data: ', data);
    }
    getPeople();
  }, []);

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
        <div className="col">
          <Box>
            <h2 className="mt-1">Story Mode</h2>
            <StoryCardContainer></StoryCardContainer>
          </Box>
        </div>
      </div>
    </>
  );
}
