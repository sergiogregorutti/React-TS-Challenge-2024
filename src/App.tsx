import { FC } from "react";

import { mockGames } from "src/mockData";

const allGames = mockGames;

const App: FC = () => {
  return (
    <div className="min-h-screen bg-pageBg text-white">
      <h1 className="mb-10 text-4xl uppercase">Game store app</h1>
      {/* @TODO Do something with allGames array */}
      Theres {allGames.length} games
    </div>
  );
};

export default App;
