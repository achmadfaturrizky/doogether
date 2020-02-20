import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import MapStyle from './mapStyle';
import styles from './styles';

class Location extends Component {
  state = {
    isLoading: false,
    latitude: '',
    longitude: '',
    data: [],
  };

  componentDidMount = () => {
    this.getLocation();
  };

  getLocation = async () => {
    const hasLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Doogether Location Permission',
        message: 'Doogether App needs access to your location ',
      },
    );
    if (hasLocationPermission) {
      await Geolocation.getCurrentPosition(
        async position => {
          console.log(position);
          await this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  render() {
    const {latitude, longitude} = this.state;
    console.log(latitude, longitude);
    return (
      <View style={styles.container}>
        <MapView
          customMapStyle={MapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: latitude || 0,
            longitude: longitude || 0,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            style={styles.bubble}
            title="You're Here"
            coordinate={{
              latitude: latitude || 0,
              longitude: longitude || 0,
            }}
            description={` Latitude: ${latitude || 0}, Longitude: ${longitude ||
              0} `}>
            <Image
              source={require('../../assets/icon/marker2.png')}
              style={styles.marker}
            />
          </Marker>
        </MapView>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.buttonBack}>
            <Image
              resizeMode={'stretch'}
              style={styles.iconBack}
              source={require('../../assets/icon/back.png')}
            />
          </TouchableOpacity>
          <View style={styles.footer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/me.jpg')}
            />
            <View style={styles.contentFooter}>
              <Text style={styles.textName}>Achmad Fatur Rizky</Text>
              <Text style={styles.title}>React Native Developer</Text>
              <View style={styles.contentFooterBottom}>
                <Text style={styles.textContentFooter}>
                  Latitude: {latitude}
                </Text>
                <Text style={styles.textContentFooter}>
                  Longitude: {longitude}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Location;
