import React from 'react';

import {Login, GetStarted, SignUp} from './screens/Auth';
import {LandingScreen} from './screens/Home';

import {createStackNavigator} from 'react-navigation-stack';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

const AuthStack = createStackNavigator({
  GetStarted,
  Login,
  SignUp,
});

const AppStack = createStackNavigator({
  LandingScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthStack,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
