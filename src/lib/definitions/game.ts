interface Discount {
  baseAmount: number;
  daysLeft: number;
}

interface GameBase {
  title: string;
  description: string;
  releaseDate: Date;
  price: number;
  discount?: Discount;
  isMultiplayer: boolean;
}

interface FPSGame extends GameBase {
  type: 'fps';
  crossPlatform: boolean;
}

interface MOBAGame extends GameBase {
  type: 'moba';
  matchDuration: number;
}

interface RacingGame extends GameBase {
  type: 'racing';
  controllerSupport: boolean;
}

export interface CardProps {
  game: Game;
}

export interface GameGenrePropertiesProps {
  game: Game;
}

export type Game = FPSGame | MOBAGame | RacingGame;
