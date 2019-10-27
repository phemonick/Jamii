import React, {useEffect} from 'react';
import {View, ActivityIndicator, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function SplashScreen() {
  async function navigateToScreen() {
    try {
      const userToken = await AsyncStorage.getItem('TOKEN_KEY');
      if (userToken !== null) {
        // value previously stored
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        return;
      }
      this.props.navigation.navigate('Auth');
    } catch (error) {
      this.props.navigation.navigate('Auth');
    }
  }

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}
