/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import codePush from "react-native-code-push";

export default class CodePushDemo extends Component {

  static navigationOptions = {
    title: 'CodePush',
  };

  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  componentDidMount() {
    var that = this;
    var hour = new Date().getHours()
    var min = new Date().getMinutes();
    var sec = new Date().getMinutes();
    that.setState({
      date:
        hour + ':' + min + ':' + sec
    });

  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Image style={{ width: 175, height: 168 }} source={require('./wow.png')} /> */}
        <Text style={styles.welcome}>ReactNative with CodePush!</Text>
        <Text style={styles.codePushText1}>This is On-Air CodePush Demo</Text>
        <Image style={{ width: 290, height: 290 }} source={require('./noUpdate.png')} />
        {/*<Image style={{ width: 350, height: 250 }} source={require('./image.png')} />*/}
        <Text style={styles.codePushText3}>No update pushed yet!</Text>
        {/* <Text style={styles.codePushText3}>Your app has been Updated at {this.state.date}</Text> */}
      </View>
    );
  }
}

//CodePushDemo = codePush({ installMode: codePush.InstallMode.IMMEDIATE })(CodePushDemo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ivory',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: 'darkblue',
    fontWeight: 'bold'
  },
  codePushText1: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold'
  },
  codePushText2: {
    fontSize: 20,
    color: 'blue'
  },
  codePushText3: {
    fontSize: 15,
    color: 'navy',
    fontWeight: 'bold'
  }
});

