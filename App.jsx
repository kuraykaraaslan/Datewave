import React from 'react';
import { Platform } from 'react-native';
//import { withExpoSnack } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Pages
import HomePage from './src/pages/HomePage';
import SettingsPage from './src/pages/SettingsPage';
import ProfilePage from './src/pages/ProfilePage';
import InboxPage from './src/pages/InboxPage';
import MatchesPage from './src/pages/MatchesPage';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faInbox, faUser, faHeart, faFire, faBars } from '@fortawesome/free-solid-svg-icons'
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
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
        <View style={{ textAlign: 'left', fontSize:20, paddingLeft:20, paddingTop:15 }} >
          <Text style={{fontSize:20}}><FontAwesomeIcon icon={faFire} size={20} color={'red'} /> dateWave</Text>
        </View>
        <View style={{ textAlign: 'right', fontSize:20, paddingRight:20, paddingTop:15 }} >
        <FontAwesomeIcon icon={faBars} size={20} color={'red'} />
        </View>

      </View>
    )
  }
});




const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Matches" component={MatchesPage} />
        <Tab.Screen name="Inbox" component={InboxPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App
