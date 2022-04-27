import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  // uri: 'https://movieql2.vercel.app/',
  cache: new InMemoryCache(),
});

export default client;
