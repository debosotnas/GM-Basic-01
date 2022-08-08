import React, { useEffect, useState } from 'react';
import SwapiData from '../api/Swapi.js';
import { Link } from 'react-router-dom';
import { Box } from '../components';
import { FALCON } from '../assets/data/chars';

export default function HomePage() {
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
        <div className="col-md-8">
          <Box>
            <h2 className="mt-2">¡Elige tu próxima aventura!</h2>

            <div className="adventure-choose-box adventure-left">
              <div className="adventure-circle"></div>
              Modo Versus
            </div>
            <div className="adventure-choose-box adventure-right">
              <div className="adventure-circle"></div>
              Modo Story
            </div>
            <div className="adventure-choose-box adventure-left">
              <div className="adventure-circle"></div>
              Modo Arcade
            </div>
            <div className="adventure-choose-box adventure-right">
              <div className="adventure-circle"></div>
              Modo-R<span>(random)</span>
            </div>
          </Box>
        </div>
        <div className="col-md-4">
          <Box className="text-center">
            <div className="pre-icon pre-small mb-3">
              <pre>{FALCON}</pre>
            </div>
            <Link to="/new-game" className="btn btn-swapi-main">
              Comenzar juego Modo-R!
            </Link>
          </Box>
          <Box>
            <h4 className="mt-2 text-center">Puntajes más altos</h4>
            <ul>
              <li>Ruffo / 10.500</li>
              <li>Sarki / 10.300</li>
              <li>PopDylan / 9.050</li>
              <li>Roco / 7100</li>
              <li>Zyppy / 6200</li>
            </ul>
          </Box>
          <Box>
            <h4 className="mt-2 text-center">Mejores jugadores</h4>
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
