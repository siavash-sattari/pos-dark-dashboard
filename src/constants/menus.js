import React from 'react';
import HomeIcon from '../icons/HomeIcon';
import DiscountIcon from '../icons/DiscountIcon';
import GraphIcon from '../icons/GraphIcon';
import MessageIcon from '../icons/MessageIcon';
import NotificationIcon from '../icons/NotificationIcon';
import SettingsIcon from '../icons/SettingsIcon';
import LogoutIcon from '../icons/LogoutIcon';

export const menus = [
  {
    name: 'Dashboard',
    icon: <HomeIcon className='fill-current w-6 h-6' />
  },

  {
    name: 'Discounts',
    icon: <DiscountIcon className='fill-current w-6 h-6' />
  },

  {
    name: 'Graph',
    icon: <GraphIcon className='fill-current w-6 h-6' />
  },
  {
    name: 'Messages',
    icon: <MessageIcon className='fill-current w-6 h-6' />
  },
  {
    name: 'Notifications',
    icon: <NotificationIcon className='fill-current w-6 h-6' />
  },
  {
    name: 'Settings',
    icon: <SettingsIcon className='fill-current w-6 h-6' />
  },
  {
    name: 'Logout',
    icon: <LogoutIcon className='fill-current w-6 h-6' />
  }
];
