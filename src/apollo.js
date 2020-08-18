import { HttpLink } from 'apollo-link-http';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const makeApolloClient = (token) => {
  // create an apollo link instance, a network interface for apollo client
  const link = new HttpLink({
    uri: `https://hasura.io/learn/graphql`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  // create an inmemory cache instance for caching graphql data
  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
  return client;
}

export default makeApolloClient;