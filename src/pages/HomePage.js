import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Box } from '../components';

export default function HomePage() {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h1>Home page!</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <Box>
            <h3 className="mt-3">¿Cómo jugar?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet diam malesuada, viverra sem vel, semper ante. Phasellus
              molestie tincidunt justo non vestibulum. Donec id pellentesque dia
            </p>
          </Box>
          <Box>
            <h3 className="mt-3">Titulo 3</h3>
            <p>
              sed feugiat est. Donec eget pellentesque libero, id sodales metus.
              Nulla urna massa, hendrerit in mollis ac, porta non neque. Cras
              nec tristique dolor, id efficitur nibh. Cras dui risus, dapibus eu
              blandit eget, malesuada ut libero. Aliquam mattis, nunc
              consectetur ultrices semper, lorem risus condimentum erat, non
              rhoncus odio ligula quis nibh. Nunc mattis cursus tortor, eu
              convallis erat
            </p>
          </Box>
        </div>
        <div className="col-md-4">
          <Box>
            <Link to="/new-game" className="btn btn-success">
              Iniciar nuevo juego
            </Link>
            <h4 className="mt-4">Últimos juegos</h4>
            <ul>
              <li>Pos 1</li>
              <li>Pos 2</li>
              <li>Pos 3</li>
              <li>Pos 4</li>
              <li>Pos 5</li>
            </ul>
          </Box>
        </div>
      </div>
    </>
  );
}
