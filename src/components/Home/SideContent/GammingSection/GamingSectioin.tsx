"use client";

import { useState } from "react";

interface Game {
  id: number;
  name: string;
  cover_img: string;
  url: string;
}

const GamingSection = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const listOfGameIFrames: Game[] = [
    {
      id: 1,
      name: "lodo",
      cover_img: "https://picsum.photos/200",
      url: "https://ludoking.com/play/",
    },
    {
      id: 2,
      name: "cards",
      cover_img: "https://picsum.photos/200",
      url: "https://cards.com",
    },
    {
      id: 3,
      name: "uno",
      cover_img: "https://picsum.photos/200",
      url: "https://uno.com",
    },
    {
      id: 4,
      name: "solitaire",
      cover_img: "https://picsum.photos/200",
      url: "https://solitaire.com",
    },
    {
      id: 5,
      name: "chess",
      cover_img: "https://picsum.photos/200",
      url: "https://chess.com",
    },
    {
      id: 6,
      name: "tic-tac-toe",
      cover_img: "https://picsum.photos/200",
      url: "https://tic-tac-toe.com",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {listOfGameIFrames.map((game) => (
          <div
            key={game.id}
            onClick={() => setSelectedGame(game)}
            className="bg-white rounded-md shadow-md p-3 cursor-pointer"
          >
            <img
              src={game.cover_img}
              alt={game.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold text-center">{game.name}</h3>
          </div>
        ))}
      </div>
      {selectedGame && (
        <iframe src={selectedGame.url} width="100%" height="400px" />
      )}
    </>
  );
};

export default GamingSection;
