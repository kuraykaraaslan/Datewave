import React from 'react';
import { Platform, Pressable } from 'react-native';
//import { withExpoSnack } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
// Navigations
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import HomePage from './src/pages/HomePage';
import SettingsPage from './src/pages/SettingsPage';
import ProfilePage from './src/pages/ProfilePage';
import InboxPage from './src/pages/InboxPage';
import MatchesPage from './src/pages/MatchesPage';
import SelectionsPage from './src/pages/SelectionsPage';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faInbox, faUser, faHeart, faFire, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const screenHomeOptions = ({ route }) => ({
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  tabBarShowLabel: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = faHome;
        break;
      case 'Matches':
        iconName = faHeart;
        break;
      case 'Inbox':
        iconName = faInbox;
        break;
      case 'Profile':
        iconName = faUser;
        break;
      default:
        iconName = faHome;
        break;
    }


    return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
  },
  header: ({ navigation, route, options }) => {
    return (
      <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'white', justifyContent: 'space-between' }}>
        <View style={{ textAlign: 'left', fontSize: 20, paddingLeft: 20, paddingTop: 15 }} >
          <Text style={{ fontSize: 20 }}><FontAwesomeIcon icon={faFire} size={20} color={'red'} /> dateWave</Text>
        </View>
        <View style={{ textAlign: 'right', fontSize: 20, paddingRight: 20, paddingTop: 15 }} >
          <Pressable onPress={() => navigation.navigate('Selections')}>
            <FontAwesomeIcon icon={faBars} size={20} color={'red'} />
          </Pressable>
        </View>

      </View>
    )
  }
});


const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={screenHomeOptions}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Matches" component={MatchesPage} />
      <Tab.Screen name="Inbox" component={InboxPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

const SelectionsStack = () => {
  return (
    <SelectionsPage />
  );
}

const transitionConfig = {
  animation: 'none',
  config: {
    duration: 0,
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


const screenAppOptions = ({ route }) => ({
  headerShown: (route.name === 'App' ? false : true),
  header: ({ navigation, route, options }) => {
    return (
      <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'white', justifyContent: 'space-between' }}>
        <View style={{ textAlign: 'left', fontSize: 20, paddingLeft: 20, paddingTop: 15 }} >
          <Text style={{ fontSize: 20 }}><FontAwesomeIcon icon={faFire} size={20} color={'black'} /> dateWave</Text>
        </View>
        <View style={{ textAlign: 'right', fontSize: 20, paddingRight: 20, paddingTop: 15 }} >
          <Pressable onPress={() => navigation.navigate('App')}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color={'black'} />
          </Pressable>
        </View>
      </View>
    )
  },
  transitionSpec: {
    open: transitionConfig,
    close: transitionConfig,
  },
});



const App = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenAppOptions}>
            <Stack.Screen name="App" component={AppStack} />
            <Stack.Screen name="Selections" component={SelectionsStack} />
          </Stack.Navigator>
        </NavigationContainer>
        );
}

        export default App
