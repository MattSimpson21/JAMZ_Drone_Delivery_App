import { Row } from 'native-base';
import React from 'react';
import { Text,
        StyleSheet,
        View,
        Image
    } from 'react-native';
import { ScreenWidth } from 'react-native-elements/src/helpers';
import { FontAwesome } from '@expo/vector-icons'; 

import colors from '../res/Colors';

class RestrauntCard extends React.Component {

    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={this.props.pic} 
                        style={styles.image}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsLeft}>
                        <Text style={{fontSize: 16, color: colors.primary}} > {this.props.name} </Text>
                        <Text style={{fontSize: 16, color: colors.highlight}} > {this.props.category} </Text>
                    </View>
                    <View style={styles.detailsRight}>
                        <Text style={{fontSize: 16, color: colors.primary}}> {this.props.rating} </Text>
                        <FontAwesome name="star" size={16} color="black" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: ScreenWidth-75,
        height: 100,
        backgroundColor: colors.background,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.secondary,
        flexDirection: 'column',
    },
    detailsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    detailsLeft: {
        flex: 5,
        flexDirection: 'row',
    },
    detailsRight: {
        flex: 1,
        backgroundColor: colors.secondary,
        borderWidth: 2,
        borderColor: colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 3,
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
        borderColor: colors.secondary,
        borderWidth: 2,
    }
});

export default RestrauntCard;