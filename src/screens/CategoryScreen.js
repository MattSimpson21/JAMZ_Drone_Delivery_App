import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ActionButton } from 'react-native-material-ui';
import { 
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    FlatList,
    TextInput,
    ImageResizeMode,
 } from "react-native";
 import {
     Button,
     Input,
     SearchBar,
     SearchBarBase,
     TouchableHighlight,
 } from "react-native-elements";

 import Icon from 'react-native-vector-icons/AntDesign';
 import { FontAwesome } from '@expo/vector-icons'; 

 import {Picker} from '@react-native-community/picker';
 
import DropDownPicker from 'react-native-dropdown-picker';

import { color } from 'react-native-elements/src/helpers';
 import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MapInput } from '../containers/AddressInputMap';

import burger from '../assets/categories/burger.png';
import FiveGuys from '../assets/categories/FiveGuysCategory.png';
import Harveys from '../assets/categories/HarveysCategory.png';
import McDonalds from '../assets/categories/McDonaldsCategory.png';
import thaiExpress from '../assets/thaiExpress/thaiExpressImage.jpg';
import fiveGuys from '../assets/fiveGuys/fiveGuysImage.jpg';



import colors from '../res/Colors.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

 const WIDTH = Dimensions.get('window').width;


export default function HomeScreen({ navigation }) {
        return(
            <SafeAreaView style={styles.backgroundContainer}>
                <View style = {styles.topContainer}>
                    <View style = {styles.backButtonContainer}>
                        <Button 
                        icon={ // Back icon is added
                            <Icon
                              name="caretleft"
                              color="#C1C1C1"
                            />
                          }
                        title = 'Back'
                        titleStyle = {{
                            alignSelf: 'center',
                            color: '#C1C2C1',
                        }}
                        buttonStyle={styles.button}
                        onPress={() => navigation.navigate("Home")}
                        />
                    </View>
                    <View style = {styles.logoContainer}> 
                        <Image source={burger} style={styles.logo}/>
                        <View style={styles.label}>
                          <Text style={styles.text}>
                             Fast Food
                         </Text>
                    </View>
                    </View>
                    <View style = {styles.labelContainer}>
                        <Text style = {styles.category}>
                            Category
                        </Text>
                    </View>
                </View>
                <View style={styles.Heading}>
                    <Text style = {styles.titleText}>
                        Nearby Restaurants
                    </Text>
                </View>
                <ScrollView>
                <View style = {styles.list}>
                <TouchableOpacity onPress={() => navigation.navigate("Restraunt")}>
                <View style= {styles.restaurantCard}>
                    <View style = {styles.largeImageContainer}>
                        <Image source={Harveys} style={styles.listimage}/>
                    </View>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.boxText}>
                            Harveys
                        </Text>
                    </View>
                    <View style = {styles.$$$Container}>
                        <Text style = {styles.$$$}>
                            $
                        </Text>
                    </View>
                    <View style = {styles.numberContainer}>
                        <Text style = {styles.number}>
                            3.6
                        </Text>
                        <FontAwesome name="star" size={16} color="black" />
                    </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Restraunt")}>
                    <View style= {styles.restaurantCard}>
                    <View style = {styles.largeImageContainer}>
                        <Image source={McDonalds} style={styles.listimage}/>
                    </View>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.boxText}>
                            McDonalds
                        </Text>
                    </View>
                    <View style = {styles.$$$Container}>
                        <Text style = {styles.$$$}>
                            $
                        </Text>
                    </View>
                    <View style = {styles.numberContainer}>
                        <Text style = {styles.number}>
                            3.4
                        </Text>
                        <FontAwesome name="star" size={16} color="black" />
                    </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Restraunt")}>
                    <View style= {styles.restaurantCard}>
                    <View style = {styles.largeImageContainer}>
                        <Image source={FiveGuys} style={styles.listimage}/>
                    </View>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.boxText}>
                            FiveGuys
                        </Text>
                    </View>
                    <View style = {styles.$$$Container}>
                        <Text style = {styles.$$$}>
                            $$
                        </Text>
                    </View>
                    <View style = {styles.numberContainer}>
                        <Text style = {styles.number}>
                            3.7
                        </Text>
                        <FontAwesome name="star" size={16} color="black" />
                    </View>
                    </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
};


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: WIDTH - 10,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 10,   
        alignSelf: 'center', 
    },
    backButtonContainer: {
        width: 75,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: colors.background,

    },
    logoContainer: {
        width: 80,
        height: 65,
        justifyContent: 'center',
    },
    logo: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    label: {
        alignContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    labelContainer: {
        alignSelf: 'center',
    },
    category: {
        textAlign: 'center',
        fontSize: 22,
        textAlignVertical: 'center',
    },
    Heading: {
        width: WIDTH - 10,
        paddingHorizontal: 20, // Changed from 30 to 20
        paddingBottom: 10,
        paddingTop: 20,
    },
    titleText: {
        fontSize: 25,
    },
    list: {
        overflow: 'scroll',
        justifyContent: 'space-between',
        width: WIDTH - 30,
        alignSelf: 'center'  ,
    },
    restaurantCard:{
        flexDirection: 'row',
        justifyContent: 'center', //This line is changed from center to flex-start
        width: WIDTH - 30, // This line is changed from null to WIDTH - 30
        height: 50,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: colors.secondary,
        marginBottom: 10,
    },
    largeImageContainer: {
        padding: 5,
        height: 40,
        width: (WIDTH - 30) * 0.15,
        justifyContent: 'center',
        borderRadius: 5,
    },
    listimage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    textContainer: {
        padding: 5,
        width: (WIDTH - 30) * 0.5,
        height: 40,
        justifyContent: 'center',
    },
    boxText: {
        justifyContent: 'center',
        textAlign: 'left',
        textAlignVertical: 'center',
    },
    $$$Container: {
        padding: 5,
        justifyContent:'center',
        width: (WIDTH - 30) * 0.15,
        height: 40,
    },
    $$$: {
        textAlign: 'right',
        textAlignVertical: 'center',
        color: colors.highlight,
    },
    numberContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        width: (WIDTH - 30) * 0.2,
        height: 40,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
    },
    number: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },

});
