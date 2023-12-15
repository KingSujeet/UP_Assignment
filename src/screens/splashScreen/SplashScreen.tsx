import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {resetRoot} from '../../navigation/NavigationServices';
import NavigationConstants from '../../navigation/NavigationConstants';
import {heightPercentageToDP} from 'react-native-responsive-screen';

type Props = {};

const SplashScreen = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      resetRoot(NavigationConstants.HomeScreen, {});
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: heightPercentageToDP(3), fontWeight: '600'}}>
        Upstocks
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
