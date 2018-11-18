import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import DisplayPokemon from './DisplayPokemon';

const query = gql`
  {
    pokemons {
      id
      name
      pokemonType
      imageurl
    }
  }
`;

export default () => {
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return '...Loading!';
        if (error) return 'error';
        //if prop that is passed with search data is defined run filter on it
        //otherwise do nothing
        return <DisplayPokemon data={data} />;
      }}
    </Query>
  );
};
