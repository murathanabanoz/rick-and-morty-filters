import React, { useState } from "react";
import useFetchCharacters from "./hooks/useFetchCharacters";
import filterCharacters from "./utils/filterCharacters";
import Filter from "./components/Filter";
import CharacterList from "./components/CharacterList";

function App() {
  const { characters, loading, error } = useFetchCharacters();
  const [statusFilter, setStatusFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredCharacters = filterCharacters(
    characters,
    statusFilter,
    genderFilter
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Rick and Morty Characters
      </h1>
      <Filter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
      />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;
