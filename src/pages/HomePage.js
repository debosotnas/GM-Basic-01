import React, { useEffect, useState, useRef } from 'react';
import SwapiData from '../api/Swapi.js';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '../components';
import { FALCON } from '../assets/data/chars';

import './HomePage.css';

export default function HomePage() {
  const falconRef = useRef(null);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function getPeople() {
      const data = await SwapiData.getPeople();
      console.log('>> data: ', data);
    }
    getPeople();
  }, []);
  const nav = useNavigate();

  const goVersusMode = () => {
    nav('/new-game');
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <Box>
            <h2 className="mt-2 animate-color">¡Elige tu próxima aventura!</h2>

            <div
              onClick={goVersusMode}
              className="adventure-choose-box adventure-left"
            >
              <div className="adventure-circle"></div>
              Modo Versus
            </div>
            <div
              onClick={goVersusMode}
              className="adventure-choose-box adventure-right"
            >
              <div className="adventure-circle"></div>
              Modo Story
            </div>
            <div
              onClick={goVersusMode}
              className="adventure-choose-box adventure-left"
            >
              <div className="adventure-circle"></div>
              Modo Arcade
            </div>
            <div
              onClick={goVersusMode}
              className="adventure-choose-box adventure-right"
            >
              <div className="adventure-circle"></div>
              Modo-R<span>(andom)</span>
            </div>
          </Box>
        </div>
        <div className="col-md-4">
          <Box className="text-center">
            <div ref={falconRef} className="pre-icon pre-small falcon-wrapper">
              <pre>{FALCON}</pre>
            </div>
            <Link
              onMouseEnter={() => {
                if (falconRef) {
                  falconRef.current.classList.add('move-falcon');
                }
              }}
              onMouseLeave={() => {
                if (falconRef) {
                  falconRef.current.classList.remove('move-falcon');
                }
              }}
              to="/new-game"
              className="btn btn-swapi-main"
            >
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
