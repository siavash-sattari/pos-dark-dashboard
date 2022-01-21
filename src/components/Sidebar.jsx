import React from 'react';
import { menus } from '../constants/menus';
import StoreIcon from '../icons/StoreIcon';

function Sidebar() {
  return (
    <div className='flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900'>
      <button className='p-2 bg-opacity-20 rounded-xl bg-primary'>
        <StoreIcon />
      </button>
      <div className='flex flex-col gap-y-4'>
        {menus.map(menu => (
          <button
            key={menu.name}
            className='p-4 mx-auto rounded-xls text-primary'>
            {menu.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
