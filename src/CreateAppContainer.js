import React from 'react';

import {Login, GetStarted, SignUp} from './screens/Auth';
import {LandingScreen} from './screens/Home';
import SplashScreen from './screens/Splash';

import {createStackNavigator} from 'react-navigation-stack';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

const AuthStack = createStackNavigator({
  GetStarted: {
    screen: GetStarted,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Login,
  SignUp,
});

const AppStack = createStackNavigator({
  LandingScreen: {
      screen: LandingScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: SplashScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
