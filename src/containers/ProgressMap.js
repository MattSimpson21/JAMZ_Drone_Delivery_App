import React, { Fragment } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

import MapInput from '../components/MapInput';
import MyMapView from '../components/MapView';
import { getLocation, geocodeLocationByName } from '../services/location-service';
import colors from '../res/Colors';

const WIDTH = Dimensions.get('window').width;

class MapContainer extends React.Component {
    state = {
        region: {}
    };

    componentDidMount() {
        this.getInitialState();
    }

    getInitialState() {
        getLocation().then(
            (data) => {
                console.log(data);
                this.setState({
                    region: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }
                });
            }
        );
    }

    getCoordsFromName(loc) {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        });
    }

    onMapRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (       
                    this.state.region['latitude'] ?
                        <View style={styles.backgroundContainer}>
                            <MyMapView
                                style={styles.mapView}
                                region={this.state.region}
                                onRegionChange={(reg) => this.onMapRegionChange(reg)} 
                            />
                        </View>
                        : null
        );
    }
}

export default MapContainer;

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
    },
    mapView: {
        flex: 1,
    },
}) 