import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from './ScreenStack';
import {NavigationRef} from './NavigationServices';

type Props = {};

const RootNavigator = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <NavigationContainer ref={NavigationRef}>
        <ScreenStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
