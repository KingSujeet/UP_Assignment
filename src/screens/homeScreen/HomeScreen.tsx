import {FlatList, StyleSheet, View, ListRenderItem} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors';
import Header from './Header';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {HoldingItem} from './HoldingItem';
import useHomeLogic from './homeViewModal/useHomeLogic';
import {FooterSection} from './FooterSection';

type Props = {};

interface Holding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
}

export interface HoldingItemProps {
  data: Holding;
}

const HomeScreen = (props: Props) => {
  const {
    portfolioData,
    totalCurrentValue,
    totalInvestment,
    todayPNL,
    totalPNL,
  } = useHomeLogic(props);

  const renderItem: ListRenderItem<Holding> = ({item}) => (
    <HoldingItem data={item} />
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={{padding: hp(2), backgroundColor: Colors.white}}
        data={portfolioData?.userHolding}
        renderItem={renderItem}
      />
      {portfolioData && (
        <FooterSection
          totalCurrentValue={totalCurrentValue}
          totalInvestment={totalInvestment}
          todayPNL={todayPNL}
          totalPNL={totalPNL}
        />
      )}
    </View>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  headerValueTxtStyle: {
    flex: 0.3,
    alignSelf: 'center',
    fontSize: hp(2),
    fontWeight: '500',
  },
  valueHeaderTxtStyle: {
    flex: 0.8,
    fontSize: hp(2),
    color: Colors.black,
    fontWeight: '600',
  },
  valuesContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    elevation: 2,
    shadowOpacity: 0.1,
    height: hp(28),
    width: '100%',
    position: 'absolute',
    bottom: hp(-2),
    borderTopLeftRadius: hp(1),
    borderTopRightRadius: hp(1),
    padding: hp(2),
  },
  container: {
    flex: 1,
  },
});
