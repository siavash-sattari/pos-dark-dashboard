import React from 'react';
import { mostOrdered } from '../constants/mostOrdered';
import ChevronDownIcon from '../icons/ChevronDownIcon';

export default function MostOrdered() {
  return (
    <div class='flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6'>
      <div class='flex justify-between items-center'>
        <h2 class='text-xl font-semibold leading-loose text-white'>
          Most Ordered
        </h2>
        <button class='flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700'>
          <ChevronDownIcon />
          <span class='text-sm text-white'>Today</span>
        </button>
      </div>
      <hr class='border-gray-700' />
      <div class='flex flex-col gap-y-4'>
        {mostOrdered.map(order => (
          <div key={order.id} class='flex gap-x-4 items-center'>
            <img
              class='w-14 h-14'
              src={'/img/' + order.image}
              alt={order.name}
            />
            <div class='flex flex-col gap-y-0.5'>
              <div class='text-sm font-medium text-white'>{order.name}</div>
              <div class='text-xs text-gray-500'>
                {order.count} dishes ordered
              </div>
            </div>
          </div>
        ))}
      </div>
      <button class='py-3.5 rounded-lg w-full border border-primary text-primary text-sm font-semibold'>
        View all
      </button>
    </div>
  );
}
