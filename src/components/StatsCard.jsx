import React from 'react';
import { stats } from '../constants/stats';
import ArrowUpIcon from '../icons/ArrowUpIcon';
import ArrowDownIcon from '../icons/ArrowDownIcon';

export default function StatsCard() {
  return (
    <div className='flex gap-6'>
      {stats.map(stat => (
        <div
          key={stat.title}
          className='flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3'>
          <div className='flex items-center gap-x-3'>
            <div className='p-2 bg-gray-800 rounded-lg'>{stat.icon}</div>
            <span
              className={
                'text-xs font-medium ' +
                (stat.status === 'up' ? 'text-accent-green' : 'text-accent-red')
              }>
              {stat.percentage}
            </span>
            <div
              className={
                'p-1 rounded-full ' +
                (stat.status === 'up'
                  ? 'bg-accent-green/20'
                  : 'bg-accent-red/20')
              }>
              {stat.status === 'up' ? (
                <ArrowUpIcon className='fill-current text-accent-green' />
              ) : (
                <ArrowDownIcon className='fill-current text-accent-red' />
              )}
            </div>
          </div>
          <div className='text-3xl font-semibold text-white'>{stat.value}</div>
          <div className='text-sm tracking-wide text-gray-500'>
            {stat.title}
          </div>
        </div>
      ))}
    </div>
  );
}
