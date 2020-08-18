import React from 'react';
import { AsyncStorage } from 'react-native';
import Drawer from './DrawerNavigator';
import CenterSpinner from '../screens/components/Util/CenterSpinner';
import { ApolloProvider } from '@apollo/client';
import makeApolloClient from '../apollo';

console.disableYellowBox = true;

const Main = () => {
  const [client, setClient] = React.useState(null);

  const fetchSession = async () => {
    // fetch session
    const session = await AsyncStorage.getItem('@todo-graphql:session');
    const sessionObj = JSON.parse(session);
    const { token, id } = sessionObj;

    const returnedClient = makeApolloClient(token);
    setClient(returnedClient);
  };

  React.useEffect(() => {
    fetchSession();
  }, []);

  if (!client) {
    return <CenterSpinner />;
  }

  return (
    <ApolloProvider client={client}>
      <Drawer />
    </ApolloProvider>
  );
};

export default Main;
