import React from 'react';
import { GameGenrePropertiesProps } from '../../lib/definitions/game';

const GameGenreProperties: React.FC<GameGenrePropertiesProps> = ({ game }) => {
  switch (game.type) {
    case 'fps':
      return game.crossPlatform ? <p><span className="tag">Cross-Platform</span></p> : null;
    case 'moba':
      return <p><span className="tag">Average match duration: {game.matchDuration} minutes</span></p>;
    case 'racing':
      return game.controllerSupport ? <p><span className="tag">Controller Supported</span></p> : null;
    default:
      return null;
  }
};

export default GameGenreProperties;
