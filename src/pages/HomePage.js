import React from 'react';
import { Link } from 'react-router-dom';
import { Box, HistoryCardContainer } from '../components';

const falcon = `
                      c==o
                    _/____\\_
              _.,--'" ||^ || "z._
             /_/^ ___\\||  || _/o\\ "-._
           _/  ]. L_| || .||  \\_/_  . _--._
          /_~7  _ . " ||. || /] \\ ]. (_)  . "--.
        |__7~.(_)_ []|+--+|/____T_____________L|
        |__|  _^(_) /^   __\\____ _   _|
        |__| (_){_) J ]K{__ L___ _   _]
        |__| . _(_) \\v     /__________|________
        l__l_ (_). []|+-+-<\\^   L  . _   - ---L|
         \\__\\    __. ||^l  \\Y] /_]  (_) .  _,--'
           \\~_]  L_| || .\\ .\\\\/~.    _,--'"
            \\_\\ . __/||  |\\  \\-+-<'"
               "---._|J__L|X o~~|[\\\\
                     \\____/ \\___|[//`;

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
              <pre>{falcon}</pre>
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
