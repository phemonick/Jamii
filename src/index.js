import React from 'react';
import CreateAppContainer from './CreateAppContainer';
import NavigationService from './NavigationService';

export const Jamii = () => (
  <CreateAppContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
);

export default Jamii;
