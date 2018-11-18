import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import QueryPokemon from './Components/QueryPokemon';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjokh0vvv1e6k01ghjqq60ae0/master'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* //eventually need to replace the below with a header/nav or whatever */}
      <h1 style={{ textAlign: 'center' }}>Pokemon</h1>
      <QueryPokemon />
    </ApolloProvider>
  );
};

export default App;
