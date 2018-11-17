import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import QueryPokemon from './Components/QueryPokemon';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjokh0vvv1e6k01ghjqq60ae0/master'
});

const App = () => {
  const [testing, updateTesting] = useState('Pokemon');
  return (
    <ApolloProvider client={client}>
      <h1
        onClick={() => {
          updateTesting(testing + '!!');
        }}
      >
        {testing}
      </h1>
      <QueryPokemon />
    </ApolloProvider>
  );
};

export default App;
