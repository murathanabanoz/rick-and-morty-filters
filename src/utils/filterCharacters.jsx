const filterCharacters = (characters, statusFilter, genderFilter) => {
  return characters.filter((character) => {
    const statusMatch =
      statusFilter === "all" || character.status.toLowerCase() === statusFilter;
    const genderMatch =
      genderFilter === "all" || character.gender.toLowerCase() === genderFilter;

    return statusMatch && genderMatch;
  });
};

export default filterCharacters;
