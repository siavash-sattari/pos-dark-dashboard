import React from 'react';
import { orders } from '../constants/orders';
import OptionsIcon from '../icons/OptionsIcon';

export default function OrderReport() {
  const ORDER_TYPE = {
    completed: 'bg-accent-green/20 text-accent-green absolute',
    preparing: 'bg-accent-purple/20 text-accent-purple',
    pending: 'bg-accent-orange/20 text-accent-orange'
  };

  return (
    <div className='p-6 bg-gray-900 rounded-lg'>
      <div className='flex justify-between items-center pb-4'>
        <h2 className='text-xl font-semibold leading-loose text-white'>
          Order Report
        </h2>
        <button className='flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5'>
          <OptionsIcon />
          <span className='text-sm text-white'>Filter order</span>
        </button>
      </div>
      <table className='w-full'>
        <thead>
          <tr className='text-sm font-semibold text-white'>
            <td className='py-4 border-b border-gray-700'>Customer</td>
            <td className='py-4 border-b border-gray-700'>Menu</td>
            <td className='py-4 border-b border-gray-700 text-right'>
              Total Payment
            </td>
            <td className='py-4 border-b border-gray-700 text-center'>
              Status
            </td>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className='text-sm text-gray-500'>
              <td className='py-4'>
                <div className='flex gap-4 items-center'>
                  <img
                    width='32'
                    src={'/img/' + order.avatar}
                    alt={order.name}
                  />
                  <span> {order.name} </span>
                </div>
              </td>
              <td className='py-4'>{order.menu}</td>
              <td className='py-4 tabular-nums text-right'>{order.total}</td>
              <td className='py-4 flex justify-center'>
                <span
                  className={
                    'flex justify-center py-1 w-24 font-medium capitalize rounded-full ' +
                    ORDER_TYPE[order.status]
                  }>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
