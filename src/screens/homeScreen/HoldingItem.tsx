import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {HoldingItemProps} from './HomeScreen';

export const HoldingItem: React.FC<HoldingItemProps> = ({data}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.symbolTxtStyle}>{data?.symbol}</Text>
          <Text style={styles.valuesTxtStyle}>{data?.quantity}</Text>
        </View>
        <View style={styles.ltpContainer}>
          <View style={styles.ltpInnerContainer}>
            <Text style={styles.valuesTxtStyle}>{'LTP: ₹'}</Text>
            <Text style={styles.ltpTxtStyle}>{data?.ltp}</Text>
          </View>
          <View style={styles.plContainer}>
            <Text style={styles.valuesTxtStyle}>{'P/L: ₹'}</Text>
            <Text style={styles.avgPriceTxtSTyle}>{data?.avgPrice}</Text>
          </View>
        </View>
      </View>
      <View style={styles.hyperLIneStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  hyperLIneStyle: {
    backgroundColor: '#dbdbdb',
    height: 0.8,
    width: '100%',
    marginBottom: hp(1),
  },
  avgPriceTxtSTyle: {
    fontSize: hp(1.8),
    fontWeight: '600',
  },
  plContainer: {
    flexDirection: 'row',
  },
  ltpTxtStyle: {
    marginBottom: hp(1),
    fontSize: hp(1.8),
    fontWeight: '600',
  },
  ltpInnerContainer: {
    flexDirection: 'row',
  },
  ltpContainer: {
    flex: 0.3,
  },
  valuesTxtStyle: {
    fontSize: hp(1.8),
  },
  symbolTxtStyle: {
    marginBottom: hp(1),
    fontSize: hp(2),
    fontWeight: '600',
  },
  innerContainer: {
    flex: 0.8,
  },
  container: {
    flexDirection: 'row',
    marginBottom: hp(1.5),
  },
});
