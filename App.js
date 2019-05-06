import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ContactsScreen from './Contacts';
import PaymentScreen from './PaymentScreen';
import codePush from "react-native-code-push";

const RootStack = createStackNavigator(
    {
      Contacts: ContactsScreen,
      Payment: PaymentScreen,
    },
    {
      initialRouteName: 'Contacts',

      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#00402e',
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

App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);

