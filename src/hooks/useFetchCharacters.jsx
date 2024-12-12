import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, loading, error };
};

export default useFetchCharacters;
