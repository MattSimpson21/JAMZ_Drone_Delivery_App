import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
 
import colors from '../res/Colors.js';
import StarRatings from '../components/StarRatings.js';

 
const WIDTH = Dimensions.get('window').width;
 
export default function RatingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      
        <View style={styles.headingContainer}>
            <Text style={styles.headingText}> Rate Your Order: </Text>
        </View>
        <View style={styles.inputComponents}>
            <View style={styles.ratingContainer}>
                <StarRatings/>
            </View>
    
            <View style={styles.commentContainer}>
                <Text style={styles.commentPrompt}> Any Additional Comments? </Text>
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
        <Button
            title="Done"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Home")}
        />
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.background,
        justifyContent: 'space-evenly',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
    },
    headingContainer: {
        flex: 1,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 20,
    },
    inputComponents: {
        flex: 6,
        justifyContent: 'space-evenly',
        padding: 10,
    },
    ratingContainer: {
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        width: WIDTH - 55,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        paddingLeft: 10,
        paddingRight: 10,
    },    
    commentContainer: {
        padding: 10,
        borderRadius: 10,
        flex: 1.5,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        width: WIDTH - 55,
        alignSelf: 'center',
        borderColor: colors.primary,
        borderWidth: 1,
        backgroundColor: colors.secondary,
    },
    commentPrompt: {
        flex: 1,
        fontSize: 20,
        padding: 10,
        alignSelf: 'center',
    },
    commentSpace: {
        flex: 5,
        backgroundColor: colors.background,
        borderRadius: 10,
    },
    comment: {
        backgroundColor: colors.background,
        flex: 1, 
    },
    button: {
        backgroundColor: colors.primary,
        width: 100,
        alignSelf: 'center',
    },
});
 
