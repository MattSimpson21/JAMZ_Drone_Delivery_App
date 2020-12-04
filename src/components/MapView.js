import React from 'react';
import MapView, {Marker} from 'react-native-maps';

import MapInput from './MapInput';

const MyMapView = (props) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={props.region}
            showsUserLocation={true}
            onRegionChange={(reg) => props.onRegionChange(reg)}
            showsMyLocationButton={false}
        >
            <Marker
                coordinate={props.region} />
        </MapView>
    )
}
export default MyMapView;