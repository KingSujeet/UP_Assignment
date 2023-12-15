import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WebConstants from '../../../networkController/WebConstants';

type Props = {};

interface PortfolioData {
  userHolding: Holding[];
}

interface Holding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
}

const useHomeLogic = (props: Props) => {
  const [portfolioData, setPortFolioData] = useState<PortfolioData | null>(
    null,
  );

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = () => {
    axios
      .get(WebConstants.PORTFOLIO_URL, {})
      .then(response => {
        console.log(response?.data);
        setPortFolioData(response?.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Calculate current value and investment value for each holding
  const holdingsWithValues = portfolioData?.userHolding.map(holding => {
    const currentValue = holding.ltp * holding.quantity;
    const investmentValue = (holding.avgPrice - holding.ltp) * holding.quantity;

    return {
      ...holding,
      currentValue,
      investmentValue,
    };
  });

  // Calculate total current value, total investment, and total PNL
  const totalCurrentValue = holdingsWithValues?.reduce?.(
    (total, holding) => total + holding.currentValue,
    0,
  );
  const totalInvestment = holdingsWithValues?.reduce(
    (total, holding) => total + holding.investmentValue,
    0,
  );
  const totalPNL = totalCurrentValue - totalInvestment;

  // Assuming today's closing values for each holding
  const todayCloseValues = {
    TCS: 3300, // replace with actual close value
    Wipro: 560, // replace with actual close value
  };

  // Calculate today's PNL for each holding and sum them up
  const todayPNL = holdingsWithValues?.reduce?.((total, holding) => {
    // Check if todayCloseValues has a valid entry for the holding
    const todayCloseValue = todayCloseValues?.[holding.symbol];
    if (todayCloseValue === undefined || typeof todayCloseValue !== 'number') {
      console.error(`Invalid or missing todayCloseValue for ${holding.symbol}`);
      return total;
    }

    // Check if holding values are numbers
    if (
      typeof holding.ltp !== 'number' ||
      typeof holding.quantity !== 'number'
    ) {
      console.error(`Invalid holding data for ${holding.symbol}`);
      return total;
    }

    const todayPNLPerHolding =
      (todayCloseValue - holding.ltp) * holding.quantity;

    // Check if todayPNLPerHolding is a valid number
    if (isNaN(todayPNLPerHolding)) {
      console.error(`Invalid PNL calculation for ${holding.symbol}`);
      return total;
    }

    return total + todayPNLPerHolding;
  }, 0);

  return {
    portfolioData,
    totalCurrentValue,
    totalInvestment,
    todayPNL,
    totalPNL,
  };
};

export default useHomeLogic;
