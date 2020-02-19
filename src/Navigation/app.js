import React from 'react';
import {
    View
} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { BottomNavigator } from './bottomNavigator';


export default createStackNavigator(
    {
        Home: {
            screen: BottomNavigator,
            navigationOptions: {
                headerShown: false
            }
        }
    }
);
