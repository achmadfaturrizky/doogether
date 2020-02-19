import React, { Component } from 'react';
import {
  StatusBar,
  View,
} from 'react-native';

import Navigator from './src/Navigation';

class App extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}
export default App;
