import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Strings from '../../assets/Strings';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.upstoxHoldingTxtStyle}>{Strings.upstoxHolding}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  upstoxHoldingTxtStyle: {
    color: Colors.white,
    fontSize: hp(2),
    fontWeight: '600',
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    padding: hp(2),
  },
});
