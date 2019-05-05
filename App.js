import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ContactsScreen from './Contacts';
import PaymentScreen from './PaymentScreen';

const RootStack = createStackNavigator(
    {
      Contacts: ContactsScreen,
      Payment: PaymentScreen,
    },
    {
      initialRouteName: 'Contacts',

      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    }
  );

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
