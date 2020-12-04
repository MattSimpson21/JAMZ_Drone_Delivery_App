import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class MapInput extends React.Component {

    render() {
        return (
            
            <GooglePlacesAutocomplete
                placeholder='Search for your address'
                minLength={2} // minimum length of text to search
                autoFocus={true}
                returnKeyType={'search'} // Can be left out for default return key 
                listViewDisplayed='auto'    // true/false/undefined
                fetchDetails={true}
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    this.props.notifyChange(details.geometry.location);
                }
                }
                query={{
                    key: 'AIzaSyD2IUWat2DHNWswN5RtgXN51kPCkJTkpXo',
                    language: 'en'
                }}
                GoogleReverseGeocodingQuery={{
                    key: 'AIzaSyD2IUWat2DHNWswN5RtgXN51kPCkJTkpXo',
                    language: 'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={300}
                
            />
        );
    }
}
export default MapInput;