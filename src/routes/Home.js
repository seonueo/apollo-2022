import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(loading);
  if (loading) {
    return 'loading...';
  }

  if (data && data.movies) {
    return data.movies.map((m) => <h1 key={m.id}>{m.id}</h1>);
  }
  return <h1>Home</h1>;
};
