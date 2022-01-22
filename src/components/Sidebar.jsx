import React, { useState } from 'react';
import { menus } from '../constants/menus';
import StoreIcon from '../icons/StoreIcon';

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('Graph');
  return (
    <div className='flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900'>
      <button className='p-2 bg-opacity-20 rounded-xl bg-primary fixed'>
        <StoreIcon />
      </button>
      <div className='flex flex-col gap-y-4 fixed top-28 items-end self-end'>
        {menus.map(menu => (
          <div
            key={menu.name}
            className={
              activeMenu === menu.name ? 'bg-gray-800 rounded-l-xl' : ''
            }>
            <button
              onClick={() => setActiveMenu(menu.name)}
              className={
                'p-4 mr-4 ml-3 my-2 rounded-xl ' +
                (activeMenu === menu.name
                  ? 'text-white bg-primary shadow-primary'
                  : 'text-primary')
              }>
              {menu.icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
