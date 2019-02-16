import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

// Imports of my nav components
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

// Imports of my screens componenents in order to wrap them correctly in my navigation
import AccountScreen from '../Screens/AccountScreen';
import FollowingScreen from '../Screens/FollowingScreen';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';

// Creation of my Bottom Navigation (the navigation with a visible tab bar)
const MainNavigator = createBottomTabNavigator({
  Account: AccountScreen,
  Search: SearchScreen,
  Following: FollowingScreen
}, {
  // The lastest version of react navigation requires us to use defaultNavigationOptions instead of navigationOptions
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      var iconName;
      var outline = (focused)
        ? ''
        // : '-outline'; // this -outline is actually leading to a visual error. Another icon library could solve the problem.
        : '';
      if (navigation.state.routeName == 'Account') {
        Platform.OS === 'ios'
          ? iconName = 'ios-information-circle'
          : iconName = 'md-information-circle'
      } else if (navigation.state.routeName == 'Search') {
        Platform.OS === 'ios'
          ? iconName = 'ios-search'
          : iconName = 'md-search'
      } else if (navigation.state.routeName == 'Following') {
        Platform.OS === 'ios'
          ? iconName = 'ios-people'
          : iconName = 'md-people'
      }

      return <Ionicons name={iconName + outline} size={25} color={tintColor}/>;
    }
  }),
  // This part is to handle the style of the bottom tab bar
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  }
});

// Here, I can create the global navigation which both contains my three first page (without the bottom tab) as well as the whole MainNavigator component
var StackNavigator = createStackNavigator({
  // pages de ma navigation sans bottom
  Home: HomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,

  // MainNavigator must my put inside the stack navigator
  MainNavigator: MainNavigator
}, {headerMode: 'none'})

// Finally, we just need to export StackNavigator (which contains all our screens) into the createAppContainer given function
export default Navigation = createAppContainer(StackNavigator);
