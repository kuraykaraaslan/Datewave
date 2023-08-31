import React from 'react';
import { Platform } from 'react-native';
import HomePage from './src/pages/HomePage';
import { withExpoSnack } from 'nativewind';


const HomeStack = () => {
  return (
    <HomePage />
  );
}



const App = () => {
  return (
    <HomePage />

  );
}

export default withExpoSnack(App);
