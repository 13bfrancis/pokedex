import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default () => {
  return (
    <Query
      query={gql`
        {
          pokemons {
            id
            name
            pokemonType
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return '...Loading!';
        if (error) return 'error';

        return (
          <>
            {data.pokemons.map(({ id, name, pokemonType }) => (
              <div key={id}>
                <h2>{name}</h2>
                <ul>
                  {pokemonType.map(pType => (
                    <li key={`${name} ${pType}`}>{pType}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        );
      }}
    </Query>
  );
};
