import React from 'react';
import { Text,
        StyleSheet,
        View,
        Image
    } from 'react-native';
import { ScreenWidth } from 'react-native-elements/src/helpers';

import colors from '../res/Colors';

class ItemCard extends React.Component {

    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.detailsContainer}>
                    <Text style={{fontSize: 16, color: colors.primary}} > {this.props.name} </Text>
                    <Text style={{fontSize: 16, color: colors.highlight}} > {this.props.price} </Text>
                </View>
                <View style={styles.picContainer}>
                    <Image 
                        source={this.props.pic} 
                        style={styles.image}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: ScreenWidth-50,
        height: 75,
        backgroundColor: colors.background,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.secondary,
        flexDirection: 'row',
    },
    detailsContainer: {
        flex: 2,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    picContainer: {
        flex: 1,
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

export default ItemCard;