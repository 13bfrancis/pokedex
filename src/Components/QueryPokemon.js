import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  {
    pokemons {
      number
      name
      pokemonType
      imageurl
    }
  }
`;

export default ({ addData }) => {
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return '...Loading!';
        if (error) return 'error';
        addData(data.pokemons);
        //if prop that is passed with search data is defined run filter on it
        //otherwise do nothing
        console.log(data.pokemons);
        // return <DisplayPokemon data={data.pokemons} />;
        return null;
      }}
    </Query>
  );
};
