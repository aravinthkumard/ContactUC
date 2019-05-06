import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Home';
import ContactsScreen from './Contacts';
import PaymentScreen from './PaymentScreen';
import CodePushScreen from './CodePushDemo';
import codePush from "react-native-code-push";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Contacts: ContactsScreen,
    Payment: PaymentScreen,
    AppCenter: CodePushScreen
  },
  {
    initialRouteName: 'Home',
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

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);

