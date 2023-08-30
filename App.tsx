import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Platform, Text, View } from 'react-native';

import Card from './src/components/Card';



const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d4d4d4' }}>
      <Card>
        <Text>Kuray Karaaslan</Text>
      </Card>
    </View>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
