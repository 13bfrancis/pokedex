import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Header from './Components/styled-components/Header';
import QueryPokemon from './Components/QueryPokemon';
import DisplayPokemon from './Components/DisplayPokemon';
import useSearchBar from './Components/useSearchBar';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjokh0vvv1e6k01ghjqq60ae0/master'
});

const App = () => {
  const [pokemon, updatePokemon] = useState(undefined);
  const { onChange, searchText } = useSearchBar();
  return (
    <ApolloProvider client={client}>
      <Header onChange={onChange} searchText={searchText} />
      {/* //eventually need to replace the below with a header/nav or whatever */}
      {pokemon ? (
        searchText === '' ? (
          <DisplayPokemon data={pokemon} />
        ) : (
          <DisplayPokemon
            data={pokemon.filter(poke =>
              poke.name.toUpperCase().includes(searchText.toUpperCase())
            )}
          />
        )
      ) : (
        <QueryPokemon addData={updatePokemon} />
      )}
    </ApolloProvider>
  );
};

export default App;
