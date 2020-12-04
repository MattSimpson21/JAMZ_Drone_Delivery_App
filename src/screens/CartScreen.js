import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';

import colors from '../res/Colors';
import restraunts from '../res/Restraunts';


function CartScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.topPanel}>
                <Text style = {styles.heading}>Your Cart</Text>
                <View style = {styles.items}>
                    <Text style = {styles.itemText}>Small Burger Combo</Text>
                    <Text style = {styles.itemPrice}>
                        ${restraunts.fiveGuys.items.hamburger.price}
                    </Text>
                    <NumericInput
                        rounded
                        minValue={0}
                        initValue={1}
                        totalWidth={100}
                        type="up-down"
                        textColor={colors.primary}
                        onChange={value => console.log(value)}
                    />
                </View>
            </View>
            <View style={styles.bottomPanel}>
                <View style={styles.totals}>
                    <View style={styles.totalsName}>
                        <Text style={styles.totalsText}>Subtotal</Text>
                        <Text style={styles.totalsText}>HST</Text>
                        <Text style={styles.totalsText}>Fee</Text>
                        <Text style={styles.totalsText}>Total</Text>
                    </View>
                    <View style={styles.totalsPrice}>
                        <Text style={styles.totalsText}>$7.99</Text>
                        <Text style={styles.totalsText}>$1.04</Text>
                        <Text style={styles.totalsText}>$2.00</Text>
                        <Text style={styles.totalsText}>$11.03</Text>
                    </View>
                </View>
                <View style={styles.checkoutButton}>
                    <Button
                        title="Checkout"
                        buttonStyle={styles.button}
                        onPress={() => navigation.navigate("Progress")}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    topPanel: {
        flex: 2,
        backgroundColor: colors.background,
        paddingTop: 50,
    },
    bottomPanel: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignContent: 'center',
        justifyContent: 'space-evenly',
    },
    heading: {
        fontSize: 20,
        alignSelf: 'center',
    },
    items: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        paddingTop: 20,
    },
    itemText: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
        color: colors.highlight,
    },
    totals: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    totalsText: {
        fontSize: 16,
    },
    totalsName: {
        
    },
    totalsPrice: {

    },
    checkoutButton: {
        width: 200,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: colors.highlight,

    },
});

export default CartScreen;