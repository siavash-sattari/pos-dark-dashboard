import React from 'react';
import CoinIcon from '../icons/CoinIcon';
import OrderIcon from '../icons/OrderIcon';
import CustomerIcon from '../icons/CustomerIcon';

export const stats = [
  {
    title: 'Total Revenue',
    percentage: '+32.40%',
    value: '$10,243.00',
    status: 'up',
    icon: <CoinIcon />
  },
  {
    title: 'Total Dish Ordered',
    percentage: '-12.40%',
    value: '23,456',
    status: 'down',
    icon: <OrderIcon />
  },
  {
    title: 'Total Customer',
    percentage: '+2.40%',
    value: '1,234',
    status: 'up',
    icon: <CustomerIcon />
  }
];
