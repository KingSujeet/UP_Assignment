import {View, Text} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {styles} from './HomeScreen';

export function FooterSection(props: any) {
  return (
    <View style={styles.valuesContainer}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(2),
        }}>
        <Text style={styles.valueHeaderTxtStyle}>{'Current Value: '}</Text>
        <Text
          style={
            styles.headerValueTxtStyle
          }>{`₹${props.totalCurrentValue?.toFixed(2)}`}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(2),
        }}>
        <Text style={styles.valueHeaderTxtStyle}>{'Total Investemnet: '}</Text>
        <Text
          style={
            styles.headerValueTxtStyle
          }>{`₹${props.totalInvestment?.toFixed(2)}`}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(2),
        }}>
        <Text
          style={styles.valueHeaderTxtStyle}>{`Today's Profit & Loss: `}</Text>
        <Text style={styles.headerValueTxtStyle}>{`₹${props.todayPNL?.toFixed(
          2,
        )}`}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(4),
        }}>
        <Text style={styles.valueHeaderTxtStyle}>{`Profit & Loss: `}</Text>
        <Text style={styles.headerValueTxtStyle}>{`₹${props.totalPNL?.toFixed(
          2,
        )}`}</Text>
      </View>
    </View>
  );
}
