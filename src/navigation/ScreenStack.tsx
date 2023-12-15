import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import NavigationConstants from './NavigationConstants';
const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={NavigationConstants.SplashScreen}
          component={SplashScreen}
        />

        <Stack.Screen
          name={NavigationConstants.HomeScreen}
          component={HomeScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ScreenStack;
