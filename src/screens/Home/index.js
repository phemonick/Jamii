import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Home} from './Tabs/LandingScreen';
import {AddEventScreen} from './Tabs/AddEvent';

const LandingScreen = createBottomTabNavigator(
  {
    Home,
    AddEventScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      header: null,
      // tabBarIcon: ({ focused, horizontal, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   let iconName;
      //   if (routeName === 'Home') {
      //     iconName = `bx-home`;
      //   } else if (routeName === 'Loans') {
      //     iconName = `bxs-folder-open`;
      //   } else if (routeName === 'Profile') {
      //     iconName = `bxs-wallet`;
      //   }

      //   return (
      //     <IconComponent
      //       image={iconName}
      //       name={routeName}
      //       size={25}
      //       badgeCount={routeName === 'Profile' ? 2 : 0}
      //       color={tintColor}
      //       style={{ width: 20, height: 20, backgroundColor: tintColor }}
      //     />
      //   );
      // },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: '#DEDEDE',
      labelStyle: {
        fontSize: 18,
        // marginTop: -Fonts.normalize(10),
        marginBottom: 10,
      },
      style: {
        height: 50,
        backgroundColor: '#ffffff',
      },
    },
  },
);

export {LandingScreen};
