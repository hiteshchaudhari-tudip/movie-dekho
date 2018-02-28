import React from 'react';
import { MovieDetails, Layout } from '../../components';

const MovieDetailPage = (props) => {
  const { location } = props;
  return (
    <Layout>
      <MovieDetails movie={location.state}/>
    </Layout>
  )
};

export { MovieDetailPage };