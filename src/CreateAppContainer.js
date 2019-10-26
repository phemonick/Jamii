import React from 'react';

import Auth from './screens/Auth';

import { createStackNavigator } from 'react-navigation-stack';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

const AuthStack = createStackNavigator({
  Auth,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthStack,
      App: AuthStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

