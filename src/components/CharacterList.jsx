import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
