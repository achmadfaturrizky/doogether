import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapStyle from './mapStyle';

class Location extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.buttonBack}>
          <Image
            resizeMode={'stretch'}
            style={styles.iconBack}
            source={require('../../assets/icon/back.png')}
          />
        </TouchableOpacity>
        <MapView
          customMapStyle={MapStyle}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: -7.7584383,
            longitude: 110.3759749,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            style={styles.bubble}
            title="You're Here"
            coordinate={{
              latitude: -7.7584383,
              longitude: 110.3759749,
            }}
            description={'This is a marker in React Natve'}>
            <Image
              source={require('../../assets/icon/marker2.png')}
              style={styles.marker}
            />
          </Marker>
        </MapView>
      </View>
    );
  }
}

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonBack: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  iconBack: {
    width: 15,
    height: 15,
  },
  marker: {
    height: 50,
    width: 50,
  },
  bubble: {
    borderRadius: 10,
  },
});
