import React from 'react';
import { SafeAreaView,
        StyleSheet,
        Text,
        Image,
        View,
        ScrollView,
        TouchableOpacity
    } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'; 
import NumericInput from 'react-native-numeric-input';

import colors from '../res/Colors';
import restraunts from '../res/Restraunts';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/src/helpers';
import { Button, Input } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyCheckbox from '../components/MyCheckbox';

function ItemScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.topHalf}>
                    <Image 
                        source={restraunts.fiveGuys.items.hamburger.pic} 
                        style={styles.image}
                    />
                <View style={styles.restrauntInfo}>
                    <View style={styles.restrauntInfoLeft}>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 24}}>Small Burger + Small Fries</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{color: colors.secondary}}>One fresh patty grilled to perfection with small fries on the side. Add as many toppings as you'd like.</Text>
                        </View>
                    </View>
                    <View style={styles.price}>
                        <Text style={{fontSize: 20, color: colors.highlight}}>$7.99</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomHalf}>
                <View style={styles.toppings}>
                    <View style={styles.toppingHeader}>
                        <Text style={styles.detailsText} >Unlimited Toppings</Text>
                        <Text>pick up to 21</Text>
                    </View>
                    <ScrollView style = {styles.toppingsScroll}>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Mayonnaise</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Relish</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Raw Onion</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Lettuce</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Pickles</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Tomato</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>A1 Sauce</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Hot Sauce</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>BBQ Sauce</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Ketchup</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Mustard</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Green Pepper</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Jalapeno</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Grilled Mushrooms</Text>
                            <MyCheckbox
                            />
                        </View>
                        <View style={styles.individualTopping}>
                            <Text style={styles.detailsText}>Grilled Onion</Text>
                            <MyCheckbox
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.additionalNotes}>
                <View style={styles.commentContainer}>
                <Text style={styles.commentPrompt}> Any allergies or dietary restrictions? </Text>
                <View style={styles.commentSpace}>
                    <Input
                        placeholder="Write your comment here"
                        style={styles.comment}
                        multiline={true}
                        underlineColorAndroid='transparent'
                    />
                </View>
            </View>
                </View>
                <View style={styles.cartSection}>
                    <View style={styles.cartBar}>
                        <NumericInput
                            rounded
                            minValue={0}
                            initValue={1}
                            totalWidth={100}
                            totalHeight={30}
                            type="basic"
                            textColor={colors.primary}
                            onChange={value => console.log(value)}
                            rightButtonBackgroundColor={colors.secondary}
                            leftButtonBackgroundColor={colors.secondary}
                            borderColor={colors.secondary}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Cart")}
                        >
                            <Text style={styles.detailsText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: colors.background,
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    topHalf: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    image: {
        alignSelf: 'center',
        flex: 2,
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
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    price: {
        flex: 1,
    },
    bottomHalf: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-evenly',
    },
    toppings: {
        flex: 3,  
        alignContent: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 10,
    },
    toppingHeader: {
        width: ScreenWidth - 50,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 5,
    },
    individualTopping: {
        width: ScreenWidth - 100,
        height: 30,
        flexDirection: 'row',
        paddingLeft: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.background,
        borderColor: colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
    },
    cartSection: {
        flex: 1,
    },
    cartBar: {
        width: ScreenWidth - 50,
        height: 30,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 5,
    },
    detailsText: {
        fontSize: 16,
    }
})

export default ItemScreen;