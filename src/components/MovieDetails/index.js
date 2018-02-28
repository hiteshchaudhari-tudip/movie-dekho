import React, { Component } from 'react';
import { imageUrl } from '../../utils/methods';
import { Image } from '../ShowMovies/styles';
import { MovieWrapper, ImageParent, Content as ContentWrapper } from'./styles';

class MovieDetails extends Component {
  render() {
    const { movie } = this.props;
    const imageSource = movie.poster_path ? movie.poster_path : movie.backdrop_path;
    const url = imageUrl(imageSource);
    return (
      <MovieWrapper>
        <ImageParent>
          <Image src={url} />
        </ImageParent>
        <ContentWrapper>
          <span><b> {movie.title} </b></span> <br/>
          <span> {movie.release_date} </span>
          <div>
            <span>Overview</span><span> {movie.overview} </span>
          </div>
          <div>
            <span>Popularity</span>
            <span> {movie.popularity} </span>
          </div>
          <div>
            <span>Vote Average</span>
            <span> {movie.vote_average} </span>
          </div>
          <div>
            <span>Vote Counts</span>
            <span> {movie.vote_count} </span>
          </div>
          <div>
            {movie.adult && <span>Adult</span>}
          </div>
        </ContentWrapper>
      </MovieWrapper>
    )
  }
};

export { MovieDetails };