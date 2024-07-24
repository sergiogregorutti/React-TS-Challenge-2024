import { FC } from "react";

import Card from './components/Card';
import { mockGames } from "src/lib/data/games";

const allGames = mockGames;

const App: FC = () => {
  return (
    <div className="min-h-screen bg-pageBg text-white">
      <h1 className="mb-10 text-4xl uppercase">Game store app</h1>
      <div className="cards-wrapper">
        {allGames.map((game, index) => (
          <Card key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default App;
