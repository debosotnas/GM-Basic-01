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
        <div className="col">
          <Box>
            <div className="adventure-choose-box active">
              <div className="adventure-circle story"></div>
              Modo Story
            </div>
            <StoryCardContainer></StoryCardContainer>
          </Box>
        </div>
      </div>
    </>
  );
}
