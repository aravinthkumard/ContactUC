import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageBackground source={require('./main.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <Image
                            source={require('./hourse.png')}
                        />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.text}>Digital Engagement Lab</Text>
                    </View>
                    <Icon
                        name='power-off'
                        type='font-awesome'
                        color='crimson'
                        size={58}
                        underlayColor='none'
                        onPress={() => {
                            this.props.navigation.navigate('Contacts');}} />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center'
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 100,
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'ivory',

    }
});