import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Directory_15.scss';
// import items from './menu-items-data';
import MenuItem_15 from './MenuItem_15';

const Directory_15 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL = 'https://crown1101.herokuapp.com/api_xx/category_xx';
      const LOCAL_URL = '/api_15/category_15';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_15/category_15', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) => {
          const { id, name, remote_url, link_url, size } = item;
          return (
            <MenuItem_15
              key={id}
              name={name}
              remote_url={remote_url}
              link_url={link_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_15;
