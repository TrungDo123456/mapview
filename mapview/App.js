/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';

import DeckSwiperExample from './Components/src/DeckSwiper'
import DemoMapView from './Components/src/mapview'
import ChangeScreen from './Components/Router/changeScreen'
import SplashScreen from './Components/src/SplashScreen'

export default class App extends Component {

  render() {
    return (
      <SplashScreen >
        <View style={{ flex: 1 }}>
          <ChangeScreen />
        </View>
      </SplashScreen>

    );
  }
}


