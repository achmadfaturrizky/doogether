import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../Screens/Home';
import News from '../Screens/News';
import Location from '../Screens/Location';

export const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <Text
            style={{
              fontSize: 10,
              alignSelf: 'center',
              color: tintColor,
              bottom: 2,
            }}>
            Home
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../assets/icon/home.png')}
            resizeMode="stretch"
            style={{height: 22, width: 25, tintColor: tintColor}}
          />
        ),
      },
    },
    News: {
      screen: News,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <Text
            style={{
              fontSize: 10,
              alignSelf: 'center',
              color: tintColor,
              bottom: 2,
            }}>
            News
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../assets/icon/news.png')}
            resizeMode="stretch"
            style={{height: 22, width: 22, tintColor: tintColor}}
          />
        ),
      },
    },
    Place: {
      screen: Location,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <Text
            style={{
              fontSize: 10,
              alignSelf: 'center',
              color: tintColor,
              bottom: 2,
            }}>
            Place
          </Text>
        ),
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('../assets/icon/place.png')}
            resizeMode="stretch"
            style={{height: 25, width: 25, tintColor: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#C8CEC4',
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
      },
    },
  },
);
