import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, PermissionsAndroid, TouchableOpacity, Alert } from 'react-native';
import Contacts from 'react-native-contacts';
import { Icon, Avatar } from 'react-native-elements'

export default class ContactsScreen extends Component {

  static navigationOptions = {
    title: 'Contacts',
  };

  constructor(props) {
    super(props);
    this.state = {
      contacts: null
    }
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      Contacts.getAll((err, contacts) => {
        if (err) {
          throw err;
        }
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
          } else {
            this.setState({ contacts })
          }
        })
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CONTACTS ON LLOYDS</Text>
        <FlatList style={styles.border}
          data={this.state.contacts}
          renderItem={({ item }) => (
            <View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 40 }}>
                  <Avatar
                    size="small"
                    rounded
                    source={require('./avatar.png')
                    } activeOpacity={0.6}
                    containerStyle={{ flex: 2, marginLeft: 7, marginTop: 5 }}
                  />
                </View>
                <View style={{ width: 250 }}>
                  <Text style={styles.contact_details}>
                    {`${item.givenName} `} {item.familyName}
                  </Text>
                </View>
                <View style={{ width: 80 }}>
                  <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Payment', {
                      givenName: item.givenName,
                      familyName: '347654  08642347',
                    });
                  }}>
                    <View style={styles.buttonWrapper}>
                      <Text style={styles.buttonText}>PAY</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.phones}>A/C: 987643 0096542375</Text>
            </View>
          )}
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
        <Text style={styles.title}>ALL CONTACTS</Text>
        <FlatList style={styles.border}
          data={this.state.contacts}
          renderItem={({ item }) => (
            <View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 40 }}>
                  <Avatar
                    size="small"
                    rounded
                    source={require('./avatar1.png')}
                    activeOpacity={0.4}
                    containerStyle={{ flex: 2, marginLeft: 7, marginTop: 5 }}
                  />
                </View>
                <View style={{ width: 250 }}>
                  <Text style={styles.contact_details}>
                    {`${item.givenName} `} {item.familyName}
                  </Text>
                </View>
                <View style={{ width: 80 }}>
                  <TouchableOpacity onPress={() => { Alert.alert('Invite has been sent to selected contact.') }}>
                    <View style={styles.buttonWrapper}>
                      <Text style={styles.buttonText}>INVITE</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {item.phoneNumbers.map(phone => (
                <Text style={styles.phones}>M: {phone.number}</Text>
              ))}
            </View>
          )}
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
        <View style={styles.footer}>
          <View style={styles.bottomButtons}>
            <Icon name='address-book' type='font-awesome' size={28}/>
            <Text style={styles.footerText}>Contacts</Text>
          </View>
          <View style={styles.bottomButtons}>
            <Icon name='upload' type='font-awesome' size={28} onPress={() => {
                            this.props.navigation.navigate('AppCenter');}}/>
            <Text style={styles.footerText}>CodePush</Text>
          </View>
          <View style={styles.bottomButtons}>
            <Icon name='file' type='font-awesome' size={28}/>
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
    marginLeft: 52
  },
  contact_details: {
    color: 'black',
    fontSize: 18,
    marginTop: 7,
    marginBottom: 5,
    marginLeft: 12
  },
  line: {
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonWrapper: {
    backgroundColor: '#00543c',
    marginTop: 7,
    marginRight: 10

  },
  buttonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 2,
    marginBottom: 2,
    marginHorizontal: 2,
    elevation: 1,
    color: '#FFFFFF',
    fontWeight:'bold'
  },
  title: {
    marginTop: 6,
    marginBottom: 6,
    color: '#00402e',
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: 16
  },
  footer: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    height: 62,
    alignItems: 'center',
  },
  bottomButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  footerText: {
    color: '#00402e',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  card: {
    flex: 1,
    height: 20
  },
  border: {
    flex: 1,
    borderRadius: 6,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});





