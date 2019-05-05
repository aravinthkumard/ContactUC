import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, PermissionsAndroid, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
import Contacts from 'react-native-contacts';
import { Icon } from 'react-native-elements'




export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: null
    }
    const stubContact = [{ givenName: 'Aravinth', emailAddresses: 'aravinthgoodwill@gmail.com' }, { givenName: 'Amma' }, { givenName: 'Appa' }, { givenName: 'MyBrother' }]
    this.setState(stubContact);
    console.log(stubContact);

  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      Contacts.getAll((err, contacts) => {
        if (err) {
          throw err;
        }
        // contacts returned
        this.setState({ contacts })
      })
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.'
        }
      ).then(() => {
        Contacts.getAll((err, contacts) => {
          if (err === 'denied') {
            // error
          } else {
            // contacts returned in Array
            this.setState({ contacts })
          }
          console.log(contacts);
        })
      })
    }


  }

  onButtonPressed() {
    Alert.alert("Invite has been sent to ");
    console.log(this.givenName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CONTACTS ON LLOYDS</Text>
        <FlatList
          data={this.state.contacts}
          renderItem={({ item }) => (
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.contact_details}>
                {`${item.givenName} `} {item.familyName}
                </Text>
                <TouchableOpacity onPress={this.onButtonPressed}>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>PAY</Text>
                  </View>
                </TouchableOpacity>
                </View>
                <Text style={styles.phones}>A: 347654   97536574</Text>
                <View
                style={styles.line}
              />
            </View>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
        <Text style={styles.title}>ALL CONTACTS</Text>
        <FlatList
          data={this.state.contacts}
          renderItem={({ item }) => (
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.contact_details}>
                  {`${item.givenName} `} {item.familyName}
                </Text>
                <TouchableOpacity onPress={this.onButtonPressed}>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>INVITE</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {item.phoneNumbers.map(phone => (
                <Text style={styles.phones}>M: {phone.number}</Text>
              ))}
              <View
                style={styles.line}
              />
            </View>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
        <View style={styles.footer}>
          <View style={styles.bottomButtons}>
            <Icon name='contacts' />
            <Text style={styles.footerText}>Contacts</Text>
          </View>
          <View style={styles.bottomButtons}>
            <Icon name='book' />
            <Text style={styles.footerText}>Summary</Text>
          </View>
          <View style={styles.bottomButtons}>
            <Icon name='folder1' />
            <Text style={styles.footerText}>Statements</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  phones: {
    fontSize: 15,
    textAlign: 'left',
  },
  contact_details: {
    color: 'black',
    fontSize: 16
  },
  line: {
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonWrapper: {
    backgroundColor: 'forestgreen',
    marginRight: 10

  },
  buttonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 2,
    marginBottom: 2,
    marginHorizontal: 2,
    elevation: 1,
    color: '#FFFFFF'
  },
  title: {
    marginTop: 6,
    marginBottom: 6,
    color: 'grey',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
  },
  bottomButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  footerText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 15,
  }
});