  window.main = {

  filterGenreMovie : (dataAllMovies , buttonFilters) => {
  const arrayFilteredGenre = dataAllMovies.filter(dataAllMovies => dataAllMovies.Genre.includes(buttonFilters));
  return arrayFilteredGenre;
  },

  filterInput: (dataAllMovies, letter) => {
    const search = dataAllMovies.filter(dataAllMovies => (dataAllMovies.Title.toLowerCase().match(letter.toLowerCase())));
    return search;
  },

  cardInformation : (dataAllMovies , posterAction ) => {
      const cardsInformation = dataAllMovies.filter(dataAllMovies => dataAllMovies.Title.includes(posterAction));
      return cardsInformation;
    }

  }
