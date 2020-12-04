import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../res/Colors';

export default class ProgressSwiper extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title:"The restauraunt is preparing your order"
                },
                {
                    title:"The drone is on the way"
                },
                {
                    title:"The drone has arrived with your food"
                }
            ]
        }
    }
    
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>
                    { item.title }
                </Text>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.around}>
                <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    renderItem={this._renderItem}
                    sliderWidth={300}
                    itemWidth={300}
                    onSnapToItem = { index => this.setState({activeIndex:index}) }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    around: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 0,
        flexDirection: "row",
        justifyContent: "center",
    },
    slide: {
        backgroundColor: colors.background,
        borderRadius: 5,
        borderColor: colors.primary,
        borderWidth: 2,
        height: 100,
        padding: 20,
        marginLeft: 20, 
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        alignSelf: "center",
    },
})

