import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { 
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
 } from "react-native";
 import {
     Button,
     Icon,
     Input,
 } from "react-native-elements";
 
import colors from '../res/Colors.js';
import ProgressSwiper from '../components/ProgressSwiper.js';
import ProgressMap from '../containers/ProgressMap.js';
 
 const WIDTH = Dimensions.get('window').width;
 
export default function ProgressScreen ({ navigation }) { 
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.textContainer}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Order Progress:</Text> 
                    <ProgressSwiper/>
                </View>
                <View style={styles.confirmButton}
                >
                    <Button
                        title="Order Confirmed"
                        buttonStyle={styles.button}
                        onPress={() => navigation.navigate("Rating")}
                    />
                </View>
            </View>
            
            <View style={styles.map}>
                <ProgressMap/>
            </View>
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    heading: {
        paddingTop: 50,
        flex: 3,
    },
    headingText: {
        fontSize: 20,
        alignSelf: "center",
    },
    textContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    confirmButton: {
        flex: 1,
        justifyContent: 'center',
        width: WIDTH - 55,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: colors.primary,
    },
    map: {
        flex: 2,
    }
});
