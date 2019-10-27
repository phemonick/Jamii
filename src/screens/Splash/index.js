import React, {useEffect} from 'react';
import {View, ActivityIndicator, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function SplashScreen(props) {
  async function navigateToScreen() {
    try {
      const userToken = await AsyncStorage.getItem('TOKEN_KEY');
      if (userToken !== null) {
        // value previously stored
        props.navigation.navigate(userToken ? 'LandingScreen' : 'GetStarted');
        return;
      }
      props.navigation.navigate('GetStarted');
    } catch (error) {
      props.navigation.navigate('GetStarted');
    }
  }
  navigateToScreen();

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}
