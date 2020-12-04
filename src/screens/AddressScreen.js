import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

import colors from '../res/Colors';
import MapContainer from '../containers/AddressInputMap';


export default function AddressScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.backgroundContainer}>
        <MapContainer style={styles.mapContainer}/>
        <TouchableOpacity style={styles.buttonContainer}>
          <Button
            title="Use This Address"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Home")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  mapContainer: {
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.primary,
  },
});

