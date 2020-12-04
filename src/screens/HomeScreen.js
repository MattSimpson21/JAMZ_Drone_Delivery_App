import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
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
     Icon,
     Input,
     SearchBar,
     SearchBarBase,
     TouchableHighlight,
 } from "react-native-elements";

 import {Picker} from '@react-native-community/picker';
 
import DropDownPicker from 'react-native-dropdown-picker';

import { color } from 'react-native-elements/src/helpers';
 import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MapInput } from '../containers/AddressInputMap';

import burger from '../assets/categories/burger.png';
import ramen from '../assets/categories/ramen.png';
import sushi from '../assets/categories/sushi.png';
import taco from '../assets/categories/taco.png';
import thaiExpress from '../assets/thaiExpress/thaiExpressImage.jpg';
import fiveGuys from '../assets/fiveGuys/fiveGuysImage.jpg';



import colors from '../res/Colors.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RestrauntCard from '../components/RestrauntCard';
import restraunts from '../res/Restraunts';

 const WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
   
  
    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };
  

  
    const getItem = (item) => {
      // Function for click on an item
      alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    state = {
        sorting: 'Sort',
      };

        return(
            <SafeAreaView style={styles.backgroundContainer}>
                <View style={styles.topHalf}>

                <View style = {styles.searchBarContainer}>
                    <SearchBar style={styles.searchBar}
                    onChangeText = {(text) => searchFilterFunction(text)}
                    onClear = {(text) => searchFilterFunction('')}
                    placeholder = "Search..."
                    placeholderTextColor = '#000000'
                    value = {search}
                    containerStyle={{
                        borderBottomColor: 'transparent',
                        borderTopColor: 'transparent',
                        backgroundColor: colors.background,
                    }}
                    inputContainerStyle = {{
                        backgroundColor: '#C1C1C1',
                        borderRadius: 10,

                    }}
                    inputStyle = {{
                        color: '#000000',  
                    }}
                    />
                </View>

                <View style={styles.buttonsBar}> 
                    <View style={styles.addressContainer}>
                        <Button
                        title= "Change Address"
                        titleStyle={{color: colors.primary}}
                        onPress={() => navigation.navigate("Address")}
                        buttonStyle={styles.button}
                        />
                    </View>
                    <View style={styles.sortContainer}>
                        <Picker
                            prompt= 'Sort'
                            style = {styles.button}
                            selectedValue={this.state.sorting}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({sorting: itemValue})
                        }>
                            <Picker.Item label="Sort by: Relevance" value="relevance" />
                            <Picker.Item label="Price (low-high)" value="price-low-high" />
                            <Picker.Item label="Price (high-low)" value="price-high-low" />
                            <Picker.Item label="Arrival Time (low-high)" value="arrival-low-high" />
                            <Picker.Item label="Arrival Time (hight-low)" value="arrival-hight-low" />
                            <Picker.Item label="Alphabetical" value="alphabetical"/>
                        </Picker>
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}
                horizontal={true}>
                    <View style={styles.Icons}>
                        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                            <View style={styles.iconContainer}>
                                <Image source={burger} style={styles.image}/>
                                <View style={styles.label}>
                                    <Text style={styles.text}>
                                        Fast Food
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                            <View style={styles.iconContainer}>
                                <Image source={taco} style={styles.image}/>
                                <View style={styles.label}>
                                    <Text style={styles.text}>
                                        Mexican
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                            <View style={styles.iconContainer}>
                                <Image source={ramen} style={styles.image}/>
                                <View style={styles.label}>
                                    <Text style={styles.text}>
                                        Soup
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                            <View style={styles.iconContainer}>
                                <Image source={sushi} style={styles.image}/>
                                <View style={styles.label}>
                                    <Text style={styles.text}>
                                        Sushi
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </View>

                <View style={styles.bottomHalf}>
                    <View style={styles.Heading}>
                        <Text style = {styles.titleText}>
                            Nearby Restaurants
                        </Text>
                    </View>
                    <View style = {styles.list}>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate("Restraunt")}
                            style={styles.cardContainer}
                        >
                            <RestrauntCard
                                name={restraunts.fiveGuys.name}
                                pic={restraunts.fiveGuys.pic}
                                category={restraunts.fiveGuys.category}
                                rating={restraunts.fiveGuys.rating}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate("Restraunt")}
                            style={styles.cardContainer}
                        >
                            <RestrauntCard
                                name={restraunts.thaiExpress.name}
                                pic={restraunts.thaiExpress.pic}
                                category={restraunts.thaiExpress.category}
                                rating={restraunts.thaiExpress.rating}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate("Restraunt")}
                            style={styles.cardContainer}
                        >
                            <RestrauntCard
                                name={restraunts.AandW.name}
                                pic={restraunts.AandW.pic}
                                category={restraunts.AandW.category}
                                rating={restraunts.AandW.rating}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
};


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    topHalf:{
        flex: 2,
    },
    bottomHalf: {
        flex: 3,
    },
    searchBarContainer: {
        justifyContent: 'center',
        width: WIDTH - 10,
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 10,   
        alignSelf: 'center',    
    },
    searchBar:{
    },
    buttonsBar: {
     paddingHorizontal: 40,
     flexDirection: 'row',
     justifyContent: 'space-between',
    },
    addressContainer: {
        width: 100,
        height: 50,
        justifyContent: 'center',
    },
    sortContainer: {
        alignSelf: 'flex-end',
        width: 150,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C1C1C1',
        overflow: 'hidden',
    },
    button: {
        backgroundColor: '#C1C1C1',  
        height: '100%',  
        borderRadius: 10, 
        resizeMode: 'contain', 
    },
    scrollContainer: {
        paddingTop: 10,
        height: 100,
    },
    Icons: {
        flexDirection: 'row',
        overflow: 'scroll',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    iconContainer: {
        width: 120,
        height: 80,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    image: {
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
    Heading: {
        flex: 1,
        width: WIDTH - 10,
        paddingHorizontal: 30,
        paddingBottom: 10,
        paddingTop: 20,
    },
    titleText: {
        fontSize: 25,
    },
    list: {
        flex: 6,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    cardContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    largeImageContainer:{
        justifyContent: 'center',
        width: null,
        height: 200,
        paddingVertical: 20,
    },
    listimage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },

});
