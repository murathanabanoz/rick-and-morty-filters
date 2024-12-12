import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="w-60 p-4 bg-white shadow-lg rounded-lg border border-gray-200 text-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-700">{character.name}</h3>
      <p
        className={`text-sm ${
          character.status === "Alive"
            ? "text-green-500"
            : character.status === "Dead"
            ? "text-red-500"
            : "text-gray-700"
        }`}
      >
        Status: {character.status}
      </p>
      <p className="text-sm text-gray-500">Gender: {character.gender}</p>
    </div>
  );
};

export default CharacterCard;
