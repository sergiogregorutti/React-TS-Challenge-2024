import React from 'react';
import './styles.css';
import { CardProps } from '../../lib/definitions/game';
import { calculateDiscount, renderGameGenre } from '../../lib/utils';
import GameGenreProperties from '../GameGenreProperties';

const Card: React.FC<CardProps> = ({ game }) => {
  const discount = calculateDiscount(game);

  return (
    <div className="game-card">
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <p>${game.price}</p>
      {discount > 0 ? `DISCOUNT ${discount}% !!!` : null}
      <p>{renderGameGenre(game.type)}</p>
      <p>Release date: {new Date(game.releaseDate).toLocaleDateString('en-GB')}</p>
      {game.isMultiplayer ? <p><span className="tag">Multiplayer</span></p> : null}

      <div className="genre-wrapper">
        <p>GENRE: {game.type.toUpperCase()}</p>
        <GameGenreProperties game={game} />
      </div>
    </div>
  );
};

export default Card;
