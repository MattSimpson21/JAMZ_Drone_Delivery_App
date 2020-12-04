import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import colors from '../res/Colors.js';
 
class StarRatings extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0
    };
  }
 
    onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 
   render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        emptyStarColor={colors.primary}
      />
    );
  }
}
 
export default StarRatings