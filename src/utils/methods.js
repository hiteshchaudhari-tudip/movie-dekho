export const imageUrl = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

export const getSearchedData = (movieName) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=c2e3bac276977d104e287f26135466a2&language=en-US&page=1&include_adult=false&query=${movieName}`;
};

export const FetchMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=c2e3bac276977d104e287f26135466a2&sort_by=popularity.desc';