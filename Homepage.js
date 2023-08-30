import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoritesIcon from '@mui/icons-material/Favorite';
import ProfileIcon from '@mui/icons-material/AccountCircle';

const Homepage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      
      {/* Your main content goes here */}
      
      <BottomNavigation
        value={selectedTab}
        onChange={handleTabChange}
        showLabels
        style={styles.bottomNav}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoritesIcon />} />
        <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
      </BottomNavigation>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomNav: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default Homepage;
