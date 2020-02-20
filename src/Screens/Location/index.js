import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from 'react-native-geolocation-service';

import MapStyle from './mapStyle';
import fonts from '../../Components/config/fonts';

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
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
  content: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  footer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    flexDirection: 'row',
  },
  title: {
    fontFamily: fonts.book,
    fontSize: 13,
  },
  textContentFooter: {
    fontFamily: fonts.book,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 20,
  },
  contentFooter: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  textName: {
    fontFamily: fonts.bold,
    fontSize: 17,
  },
  contentFooterBottom: {
    marginTop: 5,
  },
});
