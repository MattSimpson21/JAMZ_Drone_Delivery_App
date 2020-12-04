import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
 } from "react-native";
 import {
     Button,
     Input,
 } from "react-native-elements";

import logo from '../assets/JAMZlogo.png';
import colors from '../res/Colors.js';

 const WIDTH = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    return(
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
            </View>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Username'
                    leftIcon={{ type: 'font-awesome', name: 'user'}}
                    style={styles.input}
                />
                <Input
                    placeholder='Password'
                    leftIcon={{ type: 'font-awesome', name: 'lock'}}
                    secureTextEntry={true}
                />
                <Button
                    title="Login"
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate("Address")}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    logo:{
        aspectRatio: 1.2,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        width: WIDTH - 55,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: colors.primary,
    },
});