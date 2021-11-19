import React, { useState } from 'react';
import './Directory_15.scss';
import items from './menu-items-data';
import MenuItem_15 from './MenuItem_15';

const Directory_15 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_15
              key={id}
              name={name}
              remote_url={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_15;
