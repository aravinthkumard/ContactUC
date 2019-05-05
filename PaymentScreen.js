import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'native-base';


export default class PaymentScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
        };
    }

    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        that.setState({
            //Setting the value of the date time
            date:
                date + '/' + month + '/' + year
        });

    }


    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: navigation.getParam('otherParam', 'Payments'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const { navigation } = this.props;
        const givenName = navigation.getParam('givenName', 'NO-ID');
        const familyName = navigation.getParam('familyName', 'some default value');

        return (
            <View style={styles.container}>
                <Card>
                    <Text style={styles.title}>From</Text>
                    <Text style={styles.type}>Savings Account</Text>
                    <Text style={styles.account}>345238  00856423</Text>
                    <Text style={styles.type}>Available Balance: £564.98</Text>
                </Card>
                <Card>
                    <Text style={styles.title}>To</Text>
                    <Text style={styles.type}>Payee: {(givenName)}</Text>
                    <Text style={styles.account}>A/C No: {(familyName)}</Text>
                    <Text style={styles.title}>Amount</Text>
                    <TextInput style={{ color: 'gray', fontSize: 16, fontWeight: 'bold' }}>£</TextInput>
                    <Text style={styles.title}>When </Text>
                    <TextInput style={{ color: 'gray', fontSize: 16 }}>{this.state.date}</TextInput>
                    <Text style={styles.title}>Reference</Text>
                    <TextInput style={{ color: 'gray', fontSize: 16 }}></TextInput>
                </Card>
                <Card>
                <TouchableOpacity>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>PROCEED</Text>
                  </View>
                </TouchableOpacity>
                </Card>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,

    },
    title: {
        fontSize: 20,
        color: 'green',
        marginTop: 3,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    type: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5
    },
    account: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    buttonWrapper: {
        backgroundColor: 'forestgreen',
        marginRight: 10,
        
    
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

});
