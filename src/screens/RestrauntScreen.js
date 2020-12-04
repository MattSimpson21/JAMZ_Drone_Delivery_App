import React from 'react';
import { SafeAreaView,
        StyleSheet,
        Text,
        Image,
        View,
        ScrollView
    } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'; 

import colors from '../res/Colors';
import restraunts from '../res/Restraunts';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/src/helpers';
import { Row } from 'native-base';
import { Button } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ItemCard from '../components/ItemCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

function RestrauntScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.topHalf}>
                    <Image 
                        source={restraunts.fiveGuys.pic} 
                        style={styles.image}
                    />
                <View style={styles.restrauntInfo}>
                    <View style={styles.restrauntInfoLeft}>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 24}}> {restraunts.fiveGuys.name} </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{color: colors.secondary}}> {restraunts.fiveGuys.address} </Text>
                        </View>
                    </View>
                    <View style={styles.restrauntInfoRight}>
                        <View style={styles.individualDetail}>
                            <View style={styles.restrauntInfoRightTop}>
                                <Text> {restraunts.fiveGuys.expense} </Text> 
                            </View>
                            <View style={styles.restrauntInfoRightBottom}>
                                <Text style={{color: colors.highlight}}>Expense</Text>
                            </View>
                        </View>
                        <View style={styles.individualDetail}>
                            <View style={styles.restrauntInfoRightTop}>
                                <Text> {restraunts.fiveGuys.eta} </Text> 
                            </View>
                            <View style={styles.restrauntInfoRightBottom}>
                                <Text style={{color: colors.highlight}}>ETA</Text>
                            </View>
                        </View>
                        <View style={styles.individualDetail}>
                            <View style={styles.restrauntInfoRightTop}>
                                <Text> {restraunts.fiveGuys.rating} </Text>    
                            </View>
                            <View style={styles.restrauntInfoRightBottom}>
                                <Text style={{color: colors.highlight}}>Rating</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomHalf}>
                <View style={styles.bottomTopPart}>
                    <View style={styles.menuLabel}>
                        <Text style={{fontSize: 20}}>Menu</Text>
                        <AntDesign name="search1" size={20} color="black" style={{paddingLeft: 5}} />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AntDesign name="caretleft" size={20} color={colors.secondary} />  
                        <Button
                            title="Combos"
                            buttonStyle={styles.button}
                        />
                        <Button
                            title="Burgers"
                            buttonStyle={styles.button}
                        />
                        <Button
                                title="Fries"
                                buttonStyle={styles.button}
                            />
                        <AntDesign name="caretright" size={20} color={colors.secondary} />
                    </View>
                </View>
                <View style={styles.lastPart}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Item")}
                    >
                        <ItemCard
                            name='Small Burger + Small Fries'
                            pic={restraunts.fiveGuys.items.hamburger.pic}
                            price='$7.99'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Item")}
                    >
                        <ItemCard
                            name='Small Burger + Med Fries'
                            pic={restraunts.fiveGuys.items.hamburger.pic}
                            price='$8.99'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Item")}
                    >
                        <ItemCard
                            name='Small Burger + Large Fries'
                            pic={restraunts.fiveGuys.items.hamburger.pic}
                            price='$9.99'
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: colors.background,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
        flex: 1,
    },
    topHalf: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    image: {
        alignSelf: 'center',
        flex: 3,
        width: '100%',
        resizeMode: 'cover',
    },
    restrauntInfo: {
        flex: 1,
        flexDirection: 'row',
        borderColor: colors.secondary,
        borderWidth: 2,
    },
    restrauntInfoLeft: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    restrauntInfoRight: {
        flex: 1,
        paddingTop: 5,
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyContent: 'center',
    },
    individualDetail: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    restrauntInfoRightTop: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 5,
    },
    restrauntInfoRightBottom: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    bottomHalf: {
        flex: 3,
        flexDirection: 'column',
        alignContent: 'flex-start',
    },
    bottomTopPart: {
        flex: 1,
    },
    menuLabel: {
        paddingTop: 10,
        width: ScreenWidth,
        height: 40,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        height: 50,
        width: ScreenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: colors.highlight,
        width: ScreenWidth/4,
    },
    lastPart: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
    

})

export default RestrauntScreen;