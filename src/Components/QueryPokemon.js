import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PokemonContainer from './styled-components/PokemonContainer';
import PokemonCard from './styled-components/PokemonCard';
import List from './styled-components/List';
import ListType from './styled-components/ListType';
import PokemonImage from './styled-components/PokemonImage';
import Pokeball from './styled-components/Pokeball';

export default () => {
  return (
    <Query
      query={gql`
        {
          pokemons {
            id
            name
            pokemonType
            imageurl
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return '...Loading!';
        if (error) return 'error';

        return (
          <PokemonContainer>
            {data.pokemons.map(({ id, name, pokemonType, imageurl }) => (
              <PokemonCard key={id}>
                <h2 style={{ textAlign: 'center', flexBasis: '100%' }}>
                  {name}
                </h2>
                <List>
                  {pokemonType.map(pType => (
                    <ListType key={`${name} ${pType}`} pType={pType}>
                      {pType}
                    </ListType>
                  ))}
                </List>
                <PokemonImage src={imageurl} />
              </PokemonCard>
            ))}
            <Pokeball />
          </PokemonContainer>
        );
      }}
    </Query>
  );
};
