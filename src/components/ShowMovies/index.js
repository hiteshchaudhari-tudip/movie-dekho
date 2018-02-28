import React from 'react';
import { imageUrl } from '../../utils/methods';
import { Wrapper, ImageParent, Image } from './styles';

const ShowMovies = (props) => {

  const showMovieDetails = (movie) => {
    console.log("movie", movie);
    const { history } = props;
    const movieTitle = movie.title.replace(/ /gi, '-');
    history.push({
      pathname: `/movie/${movieTitle}`,
      state: movie
    });
  };

  return(
    <div>
    {
      props.movies && props.movies.map((movie, index) => {
        const imageSource = movie.poster_path ? movie.poster_path : movie.backdrop_path;
        const url = imageUrl(imageSource);
        return (
        <Wrapper key={index}>
          <div>
            <ImageParent>
              <Image className="image" src={url} onClick={() => showMovieDetails(movie)} />
            </ImageParent>
            <span><b> {movie.title} </b></span> <br/>
            <span> {movie.release_date} </span>
          </div>
        </Wrapper>
      )
    })
    }
    </div>
  )
};

export { ShowMovies };